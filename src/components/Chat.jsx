import { useEffect, useState } from "react";
import UserConnect from "./Users/UserConnect";
import Messages from "./Chat/Messages";
import { useDispatch } from "react-redux";
import ModalGroup from "./Chat/ModalGroup";
import ListGroup from "./Chat/ListGroup";
import { SearchGroup } from "../Slice/GroupSlice";
import Profile from "./Users/Profile";
import HeaderGroup from "./Chat/HeaderGroup";
import { debounce } from "lodash";
import ChatBox from "./Chat/ChatBox";
import { useNavigate } from "react-router-dom";
import signalRService from "../utils/signalRSevice";
import { getMessages, pushMessages, deleteMessage } from "../Slice/ChatSlice"
import { GetUsersConnect } from "../Slice/UsersSlice";
function Chat() {
    const token = localStorage.getItem("token")
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [])
    useEffect(() => {
        async function startService() {
            try {
                await signalRService.start(token);
                await signalRService.on("GetMessages", (data) => {
                    dispatch(getMessages(data))
                })
                await signalRService.on("NewMessage", (newMessage) => {
                    dispatch(pushMessages(newMessage))
                })
                await signalRService.on("CurrentUsers", (currentUsers) => {
                    dispatch(GetUsersConnect(currentUsers))
                })
                await signalRService.on("DeleteMessageSuccess", (messageDeleted) => {
                    dispatch(deleteMessage(messageDeleted.id))
                })
                console.log('SignalR connected');
            } catch (error) {
                console.error('Failed to start SignalR connection:', error);
            }
        }
        startService();
    }, []);

    const handleModalOpen = () => {
        setmodalIsOpen(true)
    }
    const closeModal = () => {
        setmodalIsOpen(false)
    }
    const handleChangeSearch = debounce((e) => {
        dispatch(SearchGroup(e.target.value))
    }, 1000)
    return (
        <>
            <ModalGroup modalIsOpen={modalIsOpen} closeModal={closeModal} />

            <div className="grid grid-cols-4 mx-40 h-screen">
                <div className=" bg-slate-800 text-white p-7">
                    <div className="flex">
                        <input onChange={handleChangeSearch} className="rounded-lg bg-slate-900 border-none focus:border-none p-2 w-5/6" placeholder="Search" />
                        <button onClick={handleModalOpen} className="ms-10 rounded-full cursor-pointer hover:text-red-500"><i className="fa-solid fa-plus"></i></button>

                    </div>

                    <ListGroup />

                </div>

                <div className="bg-slate-300 col-span-3 relative">
                    <div className="grid grid-cols-4">
                        <div className=" col-span-3">

                            {/* Thanh Header */}
                            <HeaderGroup />
                            <hr />

                            {/* Message receive */}
                            <Messages />
                            {/* Chat box */}

                            <ChatBox />
                        </div>




                        <div className="">
                            {/* User connect */}
                            <UserConnect />

                            {/* Proflie */}
                            <Profile />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;
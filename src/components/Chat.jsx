import { useState } from "react";
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
function Chat() {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const dispatch = useDispatch()
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
                            <div className="h-82vh overflow-y-auto">
                                <Messages />
                            </div>


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
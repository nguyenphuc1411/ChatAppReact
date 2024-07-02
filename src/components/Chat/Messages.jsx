import signalRService from "../../utils/signalRSevice";
import { useEffect, useState } from "react";

function Messages() {
    const [messages, setMessages] = useState()
    useEffect(() => {
        const fetchMessage = async () => {
            await signalRService.on("GetMessages", (data) => {
                setMessages(data)
            })
            await signalRService.on("NewMessage", (newMessage) => {
                console.log(newMessage)
                setMessages(prev => [...prev, newMessage])
            })
        }
        fetchMessage()
    }, [])
    return (
        <>
            {
                messages &&
                messages.map(item => {
                    const formatDate = (timestamp) => {
                        const date = new Date(timestamp);
                        const day = date.getDate().toString().padStart(2, '0');
                        const month = (date.getMonth() + 1).toString().padStart(2, '0');
                        const hours = date.getHours().toString().padStart(2, '0');
                        const minutes = date.getMinutes().toString().padStart(2, '0');
                        return `${day}-${month}    ${hours}:${minutes}`;
                    };
                    if (item.isMine) {
                        return (
                            <div key={item.timeStamp} className="flex justify-end mt-3 pl-2">
                                <div className="flex flex-col">
                                    <p className="bg-purple-400 p-2 rounded-md break-words w-72">{item.content}</p>
                                    <div className="flex justify-between">
                                        <span className="text-sm">{item.fullName}</span>
                                        <span className="text-[0.75rem] mt-2">{formatDate(item.timeStamp)}</span>
                                    </div>
                                </div>
                                <img className="w-10 h-10 rounded-full ml-3" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="" />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={item.timeStamp} className="flex justify-start mt-3 pl-2">
                                <img className="w-10 h-10 rounded-full mr-3" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="" />
                                <div className="flex flex-col">
                                    <p className="bg-slate-100 p-2 rounded-md break-words w-72">{item.content}</p>
                                    <div className="flex justify-between">
                                        <span className="text-sm">{item.fullName}</span>
                                        <span className="text-[0.75rem] mt-2">{formatDate(item.timeStamp)}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }

        </>
    )
}

export default Messages;
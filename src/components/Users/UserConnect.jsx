import { useEffect, useState } from "react";
import signalRService from "../../utils/signalRSevice";

function UserConnect() {
    const [listUser, setListUser] = useState()
    useEffect(() => {
        const fetchCurrentUsers = async () => {
            try {
                await signalRService.on("CurrentUsers", (currentUsers) => {
                    setListUser(currentUsers)
                })
            }
            catch {
                console.log("errors")
            }
        }
        fetchCurrentUsers()
    }, [])
    return (
        <div className="p-2 bg-gray-300">
            <p>Who's here? (10)</p>
            <hr />
            {
                listUser && listUser.map(item => {
                    return (
                        <div key={item.value.email} className="flex">
                            <img className="w-10 h-10 rounded-full mt-2 mr-2" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="Profile" />
                            <div>
                                <p>{item.value.fullName}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default UserConnect;
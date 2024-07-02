import { logout } from "../../Slice/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../Slice/UsersSlice";
import { useEffect } from "react";
function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfor = useSelector(state => state.users.user)
    const date = new Date(userInfor.createdDate)
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }
    useEffect(() => {
        dispatch(getUserInfo())
    }, [])
    return (
        <div className="bg-gray-200 w-[13.5rem] p-3 flex items-center justify-center fixed bottom-0">
            <div className="text-center">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="Profile" />
                <p className="mt-2 text-2xl">{userInfor.fullName}</p>
                <p className="mt-2 text-sm w-full break-words text-gray-600">{userInfor.email}</p>
                <p className="mt-2 text-sm text-gray-500">Joined Date:  {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</p>
                <button onClick={handleLogout} className="mt-5 hover:text-blue-700 hover:scale-110"><i className="fa-solid fa-right-from-bracket"></i>Logout</button>
            </div>
        </div>
    );
}

export default Profile;
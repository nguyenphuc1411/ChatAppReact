import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetGroup } from "../../Slice/GroupSlice";
import { SetCurrentRoom } from "../../Slice/GroupSlice";
import signalRService from "../../utils/signalRSevice";
function ListGroup() {
    const dispatch = useDispatch();
    const listGroup = useSelector((state) => state.groups.listRoom);

    useEffect(() => {
        dispatch(GetGroup());
    }, [dispatch]);

    const handleJoinGroup = async (item) => {
        await signalRService.send("Join", item.roomName)
        dispatch(SetCurrentRoom(item))
    }
    return (
        listGroup.map(item => {
            return (
                <div key={item.id} className="flex mt-6 hover:bg-slate-700 cursor-pointer p-2" onClick={() => handleJoinGroup(item)}>
                    <img className="w-14 h-14 rounded-full mr-5" src="https://www.studytienganh.vn/upload/2022/05/112274.jpg" alt="" />
                    <div>
                        <h5>{item.roomName}</h5>
                        <span className="text-gray-400">Admin: {item.adminName}</span>
                    </div>
                </div>
            )
        })
    );
}
export default ListGroup;
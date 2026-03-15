import { useEffect } from "react"
import RoomCardLeft from "../Card/RoomCardLeft"
import RoomCardRight from "../Card/RoomCardRight"
import { getAllRooms } from "../../../api/roomApi"
import { useAuth } from "../../../context/useAuth"
import { Link } from "react-router-dom"

const RoomList = () => {
    const { rooms, setRooms } = useAuth();
    useEffect(() => {
        fetchAllRooms();
    }, [])

    // const fetchAllRooms = async () => {
    //     const response = await getAllRooms();
    //     setRooms(response.data);
    // }
    async function fetchAllRooms() {
        const response = await getAllRooms();
        setRooms(response.data);
    }
    return (
        <>
            {
                rooms.map((room, index) => (
                    <Link to={`/room/${room.roomId}`} key={room.roomId}>
                        {index % 2 === 0
                        ? <RoomCardRight room={room} />
                        : <RoomCardLeft room={room} />}
                    </Link>
                ))
            }
        </>
    )
}

export default RoomList;
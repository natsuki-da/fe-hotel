import { useEffect, useState } from "react"
import RoomCardLeft from "../Card/RoomCardLeft"
import RoomCardRight from "../Card/RoomCardRight"
import { getAllRooms } from "../../../api/roomApi"

const RoomList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetchAllRooms();
    }, [])

    // const fetchAllRooms = async () => {
    //     const response = await getAllRooms();
    //     setRooms(response.data);
    // }
    async function fetchAllRooms () {
        const response = await getAllRooms();
        setRooms(response.data);
    }
    return (
        <>
            {
                rooms.map((room, index) => (
                    index % 2 === 0
                        ? <RoomCardRight key={room.roomId} room={room} />
                        : <RoomCardLeft key={room.roomId} room={room} />
                ))
            }
        </>
    )
}

export default RoomList;
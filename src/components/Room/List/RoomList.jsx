import { useEffect } from "react"
import RoomCardLeft from "../Card/RoomCardLeft"
import RoomCardRight from "../Card/RoomCardRight"
import { getAllRooms } from "../../../api/roomApi"
import { useAuth } from "../../../context/useAuth"
import { Link } from "react-router-dom"
import * as S from "./RoomList.styles"

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
            <S.Container>
                <S.TitleSection>
                    <h1>Hotel rooms</h1>
                </S.TitleSection>

                {rooms.map((room, index) => (
                    index % 2 === 0
                        ? <RoomCardRight key={room.roomId} room={room} />
                        : <RoomCardLeft key={room.roomId} room={room} />
                ))}
            </S.Container>
        </>
    )
}

export default RoomList;
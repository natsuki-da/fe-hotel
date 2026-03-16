import { useEffect} from "react";
import * as S from "./RoomDetail.styles"
import { useNavigate, useParams } from "react-router-dom";
import { getRoomById } from "../../../api/roomApi";
import { useAuth } from "../../../context/useAuth";


const RoomDetail = () => {
    const { room, setRoom } = useAuth();
    const { roomId } = useParams();
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/room/${roomId}/booking`)
    }

    useEffect(() => {
        const fetchRoomById = async () => {
            const response = await getRoomById(roomId);
            const roomData = response.data;
            setRoom(roomData);
        }
        fetchRoomById();
    }, [roomId]);

    useEffect(() => { console.log("Hi", room) }, [room])

    if (!room) {
        return <div>Loading...</div>
    }


    return (
        <S.Container>
            <S.RoomInfoWrapper>
                <S.PhotoSection>
                    <S.Photo src={room.imageUrl} alt={room.type} />
                </S.PhotoSection>
                <S.DescriptionSection>
                    <S.RoomType>{room.type}</S.RoomType>
                    <S.DescriptionContent>
                        <S.Description>{room.description}</S.Description>
                        <S.Amenity_table>
                            <tbody>
                                <tr>
                                    <th>Capacity: </th>
                                    <th>{room.capacity}</th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                </tr>
                                <tr>
                                    <th>3</th>
                                </tr>
                            </tbody>
                        </S.Amenity_table>
                    </S.DescriptionContent>
                </S.DescriptionSection>
                <button onClick={handleClick}>BOOK</button>
            </S.RoomInfoWrapper>
        </S.Container>
    )
}

export default RoomDetail;
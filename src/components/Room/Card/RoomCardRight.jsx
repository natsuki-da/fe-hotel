import { Link } from "react-router-dom";
import * as S from "./RoomCardRight.styles";

const RoomCardRight = ({ room }) => {
    return (
        <S.CardContainer>
            <S.Card>
                <S.Card_L>
                    <S.RoomSection>
                        <S.RoomType>{room.type}</S.RoomType>
                        <S.Description>
                            {room.description}
                        </S.Description>
                    </S.RoomSection>
                    <S.ButtonSection>
                        <S.Button as={Link} to={`/room/${room.roomId}`}>
                            View more
                        </S.Button>
                    </S.ButtonSection>
                </S.Card_L>
                <S.Card_R>
                    <S.Image src={room.imageUrl} alt={room.type} />
                </S.Card_R>
            </S.Card>
        </S.CardContainer>
    )
}

export default RoomCardRight;
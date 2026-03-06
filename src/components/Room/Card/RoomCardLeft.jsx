import * as S from "./RoomCardLeft.styles";

const RoomCardLeft = ({room}) => {
    return (
        <S.CardContainer>
            <S.Card>
                <S.Card_L>
                    <S.Image src={room.imageUrl} alt={room.type} />
                </S.Card_L>
                <S.Card_R>
                    <S.RoomType>{room.type}</S.RoomType>
                    <S.Description>
                        {room.description}
                    </S.Description>
                </S.Card_R>
            </S.Card>
        </S.CardContainer>
    )
}

export default RoomCardLeft;
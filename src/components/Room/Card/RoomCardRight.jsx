import * as S from "./RoomCardRight.styles";

const RoomCardRight = ({room}) => {
    return (
        <S.CardContainer>
            <S.Card>
                <S.Card_L>
                    <S.RoomType>{room.type}</S.RoomType>
                    <S.Description>
                        {room.description}
                    </S.Description>
                </S.Card_L>
                <S.Card_R>
                    <S.Image src={room.imageUrl} alt={room.type} />
                </S.Card_R>
            </S.Card>
        </S.CardContainer>
    )
}

export default RoomCardRight;
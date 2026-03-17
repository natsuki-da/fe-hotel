import * as S from "./Menu.styles"
import { Link } from "react-router-dom";


const Menu = (props) => {
    const { isOpen, setIsOpen } = props;

    return (
        <>
            {isOpen && <S.Overlay onClick={() => setIsOpen(false)} />}

            <S.MenuContainer isOpen={isOpen}>
                <S.Menu>
                    <S.Menu_Top>
                        <S.Button onClick={() => setIsOpen(false)}>
                            <S.Image src="../../icons/cross.png" />
                        </S.Button>
                    </S.Menu_Top>
                    <S.Menu_Middle>
                        <S.MenuLinks>
                            <S.MenuLink to="/">HOME</S.MenuLink>
                            <S.MenuLink to="/room-list">Room</S.MenuLink>
                        </S.MenuLinks>
                    </S.Menu_Middle>
                    <S.Menu_Bottom>
                        <S.Title>RIKYU</S.Title>
                        <S.Footer></S.Footer>
                    </S.Menu_Bottom>
                </S.Menu>
            </S.MenuContainer>
        </>
    )
}

export default Menu;
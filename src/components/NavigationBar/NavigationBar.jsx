import { useState } from "react"
import * as S from "./NavigationBar.styles"
import Menu from "./Menu";
import { getIconUrl } from "../../utils/imageHelper";


const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <S.Container>
                <S.Header>
                    <a href="/"><S.Title>kyoto hideaway</S.Title></a>
                    <S.Button onClick={() => setIsOpen(true)}>
                        <S.Image src={getIconUrl('hamburger.svg')} alt="menu icon" />
                    </S.Button>
                </S.Header>
            </S.Container>
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default NavigationBar;
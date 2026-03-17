import { useState } from "react"
import * as S from "./NavigationBar.styles"
import Menu from "./Menu";


const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <S.Container>
                <S.Header>
                    <a href="/"><S.Title>Rikyu</S.Title></a>
                    <S.Button onClick={() => setIsOpen(true)}>
                        <S.Image src="../../icons/hamburger.svg" alt="menu icon" />
                    </S.Button>
                </S.Header>
            </S.Container>
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default NavigationBar;
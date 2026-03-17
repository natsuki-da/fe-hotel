import styled from "styled-components";
import { Colors } from "../../styles/Global.styles";
import { fonts } from "../../styles/fonts";


export const MenuContainer = styled.div`
  background-color: ${Colors.Primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed; 
  top: 0; 
  right: 0; 
  width: 20%; 
  height: 100vh;

  transform: translateX(100%);
  transition: transform 0.3s ease;
  
   ${({ $isOpen }) =>
    $isOpen &&
    `
    transform: translateX(0);
  `}
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  height: 100%;
  img {
   width: 1.5rem;
   color: ${Colors.Tertiary};
  }
`;
 
export const Menu_Top = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Button = styled.button`
  background-color: ${Colors.Primary};
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 2rem;
`;

export const Menu_Middle = styled.div`
  height: 60%;

`; 

export const MenuLinks = styled.div`
  font-family: ${fonts.secondary};
  font-size: 1.5rem;
  line-height: 3rem;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const MenuLink = styled.div`
  text-decoration: none;
`;

export const Menu_Bottom = styled.div`
  height: 20%;
  width: 100%;
  img {
  width: 2rem;
  }
`;

export const Title = styled.div`
  font-family: ${fonts.primary};
  font-size: 1.5rem;
  font-weight: 200;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


import styled from "styled-components";
import { Colors } from "../../../styles/Global.styles";
import { fonts } from "../../../styles/fonts";

export const CardContainer = styled.div`
  padding-left: 25%;
  padding-bottom: 6rem;
  overflow: hidden;
`

export const Card = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  background-color: ${Colors.Secondary};
`;

export const Card_L = styled.div`
 width:40%;
 display: flex;
 flex-direction: column;
 margin: 1rem 3rem;
`

export const RoomSection = styled.section`
  flex: 4;
`

export const RoomType = styled.h2`
  font-size: 2.5rem;
  font-family: ${fonts.secondary};
  font-weight: 400;
`

export const Description = styled.p`
  font-size: 1rem;
`
export const ButtonSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  width: 10rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${fonts.secondary};
  font-size: 1.25rem;
  font-weight: 500;

  text-decoration: none;
  color: inherit;

  background-color: ${Colors.Primary};
  border: 0.1rem solid ${Colors.Tertiary};
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${Colors.Tertiary};
    color: ${Colors.Primary};
  }
`;

export const Card_R = styled.div`
 width: 60%;
 height: 100%;
`
export const Image = styled.img`
 width: 100%;
 height: 25rem;
`
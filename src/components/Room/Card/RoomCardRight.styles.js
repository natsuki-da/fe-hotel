import styled from "styled-components";
import { Colors } from "../../../styles/Global.styles";

export const CardContainer = styled.div`
  padding-left: 25%;
  padding-bottom: 6rem;
  overflow: hidden;
`

export const Card = styled.div`
  width: 100%;
  height: 25rem;
  //border: 0.2rem, solid;
  display: flex;
  background-color: ${Colors.Secondary};
`;

export const Card_L = styled.div`
 width:40%;
 display: flex;
 flex-direction: column;
 margin: 1rem 3rem;
`

export const RoomType = styled.h2`
  font-size: 2rem;
`

export const Description = styled.p`
  font-size: 1rem;
`

export const Card_R = styled.div`
 width: 60%;
 height: 100%;
`
export const Image = styled.img`
 width: 100%;
`
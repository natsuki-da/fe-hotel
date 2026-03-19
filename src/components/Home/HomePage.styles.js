import styled from "styled-components";
import { Colors } from "../../styles/Global.styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.Primary};
`

export const CoverPhoto = styled.div`
  padding-top: 10rem;
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: flex-end;

`;

export const Image = styled.img`
  width: 60%; 
  height: auto;
`

export const Footer= styled.div`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  background-color: ${Colors.Primary};
  color: white;
  font-size: 0.9rem;
`;
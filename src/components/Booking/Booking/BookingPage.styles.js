import styled from "styled-components";
import { fonts } from "../../../styles/fonts";

export const Container = styled.div`
  width: 100%;

`;

export const ButtonContent = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(130, 102, 36, 0.4);
`

export const Button = styled.button`
  font-family: ${fonts.secondary};
  font-size: 1.5rem;
  height: 3rem;
  width: 10rem;
`
import styled from "styled-components";
import { Colors } from "../../../styles/Global.styles";
import { fonts } from "../../../styles/fonts";

export const Container = styled.div`
  background-color: ${Colors.Primary};
  padding-top: 6rem;
`;

export const TitleSection = styled.section`
  width: 30%;
  height: 5rem;
  display: flex;
  align-items: center;
  background-color: ${Colors.Tertiary};
  margin-bottom: 6rem;

  h1 {
    font-family: ${fonts.primary};
    color: ${Colors.Primary};
    font-size: 3rem;
    font-weight: 200;
  }
`
import styled from "styled-components";
import { fonts } from "../../../styles/fonts";
import { Colors } from "../../../styles/Global.styles";

export const Container = styled.div`
  width: 100%;
  background-color: ${Colors.Primary};
  padding-bottom: 3rem;
`;

export const ButtonSection = styled.section`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

`

export const ButtonContainer = styled.div`
  width: 10rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid ${Colors.Tertiary};
  background-color: ${Colors.Secondary};
  &:hover {
    background-color: ${Colors.Tertiary};
    color: ${Colors.Primary}
  }
`;

export const Button = styled.div`
  font-family:  ${fonts.secondary};
  font-size: 1.25rem;
  font-weight: 500;
`;

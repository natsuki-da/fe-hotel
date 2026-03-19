import styled from "styled-components";
import { Colors } from "../../../styles/Global.styles";
import { fonts } from "../../../styles/fonts";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const ConfirmationMailBody = styled.div`
  width: 80%;
  background-color: #ffff;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;

`
export const Header = styled.div`
  width: 100%;
  font-family: ${fonts.secondary};
  h1 {
    font-size: 3rem;
    font-weight: 600;
  }
  p {
    font-size: 2rem;
    font-weight: 400;
  }
`

export const BookingDetails = styled.div`
  font-family: ${fonts.secondary};
  h2 {
    font-size: 2rem;
    font-weight: 600;
    font-family: ${fonts.secondary};
  }
  ul{
    font-size: 2rem;
    width: 90%;
  }
  li{
    font-size: 2rem;
  }
`
export const ButtonSection = styled.section`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
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

  background-color: transparent;
  border: 0.1rem solid ${Colors.Tertiary};
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${Colors.Tertiary};
    color: ${Colors.Primary};
  }
`;
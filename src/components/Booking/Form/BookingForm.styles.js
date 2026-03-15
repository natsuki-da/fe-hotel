import styled from "styled-components";
import { fonts } from "../../../styles/fonts";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(130, 102, 36, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapper = styled.div`
  margin: 7rem;
  width: 65%;
  //height: 30rem;
  display: flex;
`;

export const GuestDetailsSection = styled.div`
  width: 70%;
  background-color: rgba(225, 76, 126, 0.4);
  padding: 3rem;
`;

export const PaymentContent = styled.div`
  background-color: #ffff;
`;

export const GuestDetailContent = styled.div`
  background-color: #ffff;
`;

export const GuestForm = styled.form`
  
`

export const InputField = styled.div`
`;

export const Label = styled.label`
  font-family:  ${fonts.secondary};  
  font-size: 1.5rem;
`;

export const Input = styled.input`
  font-family:  ${fonts.primary};  
  font-size: 1rem;
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

export const RoomInfoSection = styled.div`
  width: 30%;
  background-color: #ffff;
  `;

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
  width: 50%;
  height: 30rem;
  background-color: rgba(225, 76, 126, 0.4);
  display: flex;
`;

export const GuestDetailsSection = styled.div`
  width: 70%;
`;

export const PaymentContent = styled.div`
`;

export const GuestDetailContent = styled.div`

`;

export const InputLabel = styled.label`
  font-family:  ${fonts.secondary};  
  font-size: 1.5rem;
`;

export const InputField = styled.input`
  font-family:  ${fonts.primary};  
  font-size: 1rem;
`;

export const RoomInfoSection = styled.div`
  width: 30%;
  background-color: #ffff;
  `;

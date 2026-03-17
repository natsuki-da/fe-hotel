import styled from "styled-components";
import { fonts } from "../../../styles/fonts";
import { Colors } from "../../../styles/Global.styles";

export const Container = styled.div`
  width: 100%;
  //height: 100vh;
  background-color: ${Colors.Primary};
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

export const GuestDetailsSection = styled.section`
  width: 70%;
  background-color: ${Colors.Secondary};
  padding: 3rem;
  h1 {
    font-family: ${fonts.secondary};
    font-size: 3rem;
    font-weight: 600;
  }
  
`;

export const PaymentContent = styled.div`
  background-color:  #ffffff;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
   h2 {
    font-family: ${fonts.primary};
    font-size: 1.5rem;
    font-weight: 200;
  }

`;

export const GuestDetailContent = styled.div`
  background-color:  #ffffff;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  h2 {
    font-family: ${fonts.primary};
    font-size: 1.5rem;
    font-weight: 200;
  }
`;

export const GuestForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputField = styled.div`
   height: 3rem;
   display: flex;
   align-items: center;
   gap: 1.5rem;
   margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  font-family:  ${fonts.primary};  
  font-size: 1rem;
  font-weight: 200;
  text-align: right; 
  width: 10rem;
`;

export const Input = styled.input`
  font-family:  ${fonts.primary};  
  font-size: 1rem;
  flex: 1;
`;

export const RoomInfoSection = styled.section`
  width: 30%;
  background-color:  #ffffff;
  `;

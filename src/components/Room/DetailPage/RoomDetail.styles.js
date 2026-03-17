import styled from "styled-components";
import { fonts } from "../../../styles/fonts";
import { Colors } from "../../../styles/Global.styles";

export const Container = styled.div`
  width: 100%;
  padding-top: 6rem;
  background-color: ${Colors.Primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RoomInfoWrapper = styled.div`
  width: 80%;
  //height: 70%;
  background-color: ${Colors.Secondary};
`

export const PhotoSection = styled.section`
  width: 100%;
  height: 30rem;
  background-color: #ffff;
`
export const Photo = styled.img`
  width: 100%;
`

export const DescriptionSection = styled.section`
  background-color: ${Colors.Secondary};
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`

export const RoomType = styled.h2`
  background-color:  #ffff;
  text-indent: 5rem;
  font-family:  ${fonts.secondary};
  font-weight: 400;
  font-size: 2.5rem;
`

export const DescriptionContent = styled.div`
  width: 95%;
  display: flex;
`

export const Description = styled.div`
  width: 60%;
  background-color: ${Colors.Secondary};
`

export const Amenity_table = styled.table`
  width: 40%;
  border-collapse: collapse;
  border: none;
  tr {
    height: 5rem;
    //background-color: ${Colors.Tertiary};
    border-bottom: 0.1rem solid #000;
    display: flex;
    align-items: center;
  }
  th {
    text-align: left; 
    flex: 2;
  }
  td {
    flex: 3;
  }
`
export const ButtonSection = styled.section`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
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

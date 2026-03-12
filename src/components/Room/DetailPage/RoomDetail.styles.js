import styled from "styled-components";
import { fonts } from "../../../styles/fonts";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(130, 102, 36, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RoomInfoWrapper = styled.div`
  width: 80%;
  //height: 70%;
  background-color: rgba(145, 73, 93, 0.4);
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
  height: 20rem;
  background-color: rgba(203, 161, 35, 0.4);
  display: flex;
  flex-direction: column;
`

export const RoomType = styled.h2`
  background-color:  #ffff;
  text-indent: 5rem;
  font-family:  ${fonts.secondary};
  font-weight: 100;
  font-size: 2.5rem;
`

export const DescriptionContent = styled.div`
display: flex;
`

export const Description = styled.div`
  width: 50%;
  background-color: rgba(207, 204, 20, 0.4);
`

export const Amenities = styled.div`
  width: 50%;
`

export const Amenity_table = styled.table`
  width: 50%;
  border: 1px solid;
  tbody, tr, th {
  background-color: #ffff;
  }
`

import styled from "styled-components";
import { Colors } from "../../styles/Global.styles";
import { fonts } from "../../styles/fonts";


export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.Secondary};
  opacity: 70%;
  position: sticky;
  top: 0;
`;

export const Header = styled.div`
  display: flex;
  height: 3rem;
  width: 95%;
  justify-content: space-between;
  a {
  text-decoration: none;
  }
  //align-items: baseline;
  //justify-content: end; 
  //position: relativ;
  `;

  export const Title = styled.div`
  font-size: 2.5rem;
  line-height: 3rem;
  padding: 0 2rem;
  font-family: ${fonts.secondary};
  color: ${Colors.Tertiary};
`;

  export const Button = styled.button`
  background-color: ${Colors.Secondary};
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 2rem;
`;

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 30%;
`;

export const HeaderLink = styled.div`
  color: ${Colors.Primary};
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  margin: 0 1rem;
  font-family: ${fonts.primary};
`;

export const Line = styled.div`
  width: 50%;
  margin: 0 25%;
  height: 1px;
  background-color: ${Colors.Primary};
`;

  export const Sidebar = styled.div`
    width: 4rem;
    background-color: ${Colors.Primary};
    overflow: hidden;
    transition: width 0.2s linear;
    &:hover {
      width: 10rem;
    }
  ul{
    padding-left: 1rem;
  }
  li {
    list-style: none;
  } 
  a {
    display: flex;
    flex-direction: row;
    align-items: center;  
  }
  span {
    color: red;
    font-size: 1rem;
  }
`;
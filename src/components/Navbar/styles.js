import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBarLogo = styled.img`
  /* margin-top: 20px; */
  margin-top: 65px;
  margin-bottom: 25px;
  height: 160px;
  width: 128px;
  object-fit: cover;
`;

export const NavItemStyle = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.darkBlue};
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 25px;

  :hover {
    text-decoration: none;
    color: ${(props) => props.theme.lightBlue};
    transition: ease 0.4s;
  }

  &.active {
    color: ${(props) => props.theme.lightBlue};
  }
`;
export const NavStyle = styled.nav`
  background-color: ${(props) => props.theme.white};
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
`;

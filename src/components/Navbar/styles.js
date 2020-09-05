import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBarLogo = styled.img`
  max-height: 160px;
  max-width: 128px;

  @media screen and (max-width: 768px) {
    max-height: 75px;
    max-width: 128px;
  }
`;

export const NavBarLogoDiv = styled.div`
  margin-top: 65px;
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  height: 160px;
  width: 128px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 15px;
    height: 75px;
    width: 128px;
  }
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
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }

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
  z-index: 4;
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  position: relative;
`;

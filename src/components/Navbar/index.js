import React from "react";
import {
  NavBarLogo,
  NavStyle,
  NavItemStyle,
  NavWrapper,
  NavBarLogoDiv,
} from "./styles";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

const Navbar = () => {
  return (
    <NavStyle className="navbar navbar-expand">
      <NavWrapper>
        <NavBarLogoDiv>
          <Link to="/">
            <NavBarLogo alt="logo" src={logo} />
          </Link>
        </NavBarLogoDiv>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavItemStyle className="nav-item" exact to="/">
              Home
            </NavItemStyle>
            <NavItemStyle className="nav-item" to="/lookbook">
              Lookbook
            </NavItemStyle>
            <NavItemStyle className="nav-item" to="/about">
              About
            </NavItemStyle>
          </div>
        </div>
      </NavWrapper>
    </NavStyle>
  );
};

export default Navbar;

import React from "react";
import {
  FooterWrapper,
  FooterWrapperWrapper,
  InstagramStyled,
  CopyrightStyled,
} from "./styles";

const Footer = () => {
  return (
    <FooterWrapperWrapper>
      <FooterWrapper>
        <a
          target="_blank"
          href="https://www.instagram.com/theeunoiastate/"
          rel="noopener noreferrer"
        >
          <InstagramStyled />
        </a>
        <CopyrightStyled>©2020 by The Eunoia State.</CopyrightStyled>
      </FooterWrapper>
    </FooterWrapperWrapper>
  );
};

export default Footer;

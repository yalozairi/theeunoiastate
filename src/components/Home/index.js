import React from "react";
import sea from "../../assets/fixed:lookbook/WelcomeMountains.jpg";
import { Helmet } from "react-helmet";
import {
  BeachPic,
  WelcomeDiv,
  WelcomeText,
  TextAndButton,
  WelcomeButton,
  BeachPicDiv,
  InstaDiv,
} from "./styles";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | The Eunoia State</title>
      </Helmet>
      <WelcomeDiv>
        <BeachPicDiv>
          <BeachPic src={sea} alt="Sea" />
        </BeachPicDiv>
        <TextAndButton>
          <WelcomeText>WELCOME TO EUNOIA</WelcomeText>
          <WelcomeButton>
            <a
              target="_blank"
              href="https://www.instagram.com/theeunoiastate/"
              rel="noopener noreferrer"
              smooth={true}
            >
              Explore
            </a>
          </WelcomeButton>
        </TextAndButton>
      </WelcomeDiv>
      <InstaDiv></InstaDiv>
    </div>
  );
};

export default Home;

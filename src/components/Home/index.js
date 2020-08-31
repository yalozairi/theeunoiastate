import React from "react";
import sea from "../../assets/carolinie-cavalli-Qw3w0oBH63s-unsplash.jpeg";
import { Helmet } from "react-helmet";
import {
  BeachPic,
  WelcomeDiv,
  WelcomeText,
  TextAndButton,
  WelcomeButton,
  //TODO NICE LOADING DefaultWelcomeDiv,
  InstaDiv,
} from "./styles";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | The Eunoia State</title>
      </Helmet>
      <WelcomeDiv>
        <BeachPic src={sea} alt="Sea" />
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

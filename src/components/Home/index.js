import React from "react";
import sea from "../../assets/carolinie-cavalli-Qw3w0oBH63s-unsplash.jpeg";
import { Helmet } from "react-helmet";
import {
  BeachPic,
  WelcomeDiv,
  WelcomeText,
  TextAndButton,
  WelcomeButton,
  InstaDiv,
} from "./styles";
import { Link } from "react-router-dom";

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
            <Link smooth={true}>Explore</Link>
          </WelcomeButton>
        </TextAndButton>
      </WelcomeDiv>
      <InstaDiv></InstaDiv>
    </div>
  );
};

export default Home;

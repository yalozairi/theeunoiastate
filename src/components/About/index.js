import React from "react";
import { Helmet } from "react-helmet";
import {
  TitleWrapper,
  MoreButtonStyled,
  BeachWrapper,
  Beach,
  VisionWrapper,
  LeftVisionWrapper,
  RightVisionWrapper,
  ChartStyled,
} from "./styles";
import beach from "../../assets/dominik-schroder-ivieBAESVWM-unsplash.png";
import chart from "../../assets/Chart.png";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About | The Eunoia State</title>
      </Helmet>
      <TitleWrapper>
        <p className="Title">GET TO KNOW US</p>
        <p className="Body">
          Eunoia came to be in 2020 as a daily reminder to focus on what gives
          us a fulfilled life. <br /> It is a way of proactive living while
          creating change in the world.
        </p>
        <p className="Quote">
          Happiness is not something you find. Happiness is a by-product of a
          great lifestyle.
        </p>
        <MoreButtonStyled>
          <a href="#more">Tell Me More</a>
        </MoreButtonStyled>
      </TitleWrapper>
      <BeachWrapper>
        <Beach src={beach} alt="Beach" />
      </BeachWrapper>
      <VisionWrapper id="more" className="container-fluid">
        <div className="row">
          <LeftVisionWrapper className="col-6 col-sm-12">
            <ChartStyled src={chart} alt="Chart"></ChartStyled>
          </LeftVisionWrapper>
          <RightVisionWrapper className="col-6 col-sm-12">
            <p className="Title">OUR VISION</p>
            <p className="Body">
              Our vision is to empower communities through <br />
              embarking on individual self-discovery journeys that we <br />
              believe collectively have the power to change the world.
            </p>
            <p className="Steps">
              There are three steps that come with this:
              <ol>
                <li>
                  Develop yourself: Our products work to help you achieve your
                  <br />
                  ideal lifestyle, ultimately maintaining happiness.
                </li>
                <li>
                  Help your community: We want you to build a community that
                  <br />
                  you are comfortable in, thus promoting positivity.
                </li>
                <li>
                  Change the world: Donations are made with every purchase,
                  <br />
                  giving you the opportunity to make a difference.
                </li>
              </ol>
            </p>
          </RightVisionWrapper>
        </div>
      </VisionWrapper>
    </div>
  );
};

export default About;

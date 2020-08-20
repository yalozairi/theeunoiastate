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
  GoalsWrapper,
} from "./styles";
import beach from "../../assets/dominik-schroder-ivieBAESVWM-unsplash.png";
import chart from "../../assets/Chart.png";
import VisionList from "./VisionList";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About | The Eunoia State</title>
      </Helmet>
      <TitleWrapper className="container">
        <p className="Title">GET TO KNOW US</p>
        <p className="Body">
          Eunoia came to be in 2020 as a daily reminder to focus on what gives
          us a fulfilled life. It is a way of proactive living while creating
          change in the world.
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
          <LeftVisionWrapper className="col-m-6">
            <ChartStyled src={chart} alt="Chart"></ChartStyled>
          </LeftVisionWrapper>
          <RightVisionWrapper className="col-m-6">
            <VisionList />
          </RightVisionWrapper>
        </div>
        <GoalsWrapper className="row">
          <p className="Title">Our Goals</p>
          <p className="Body">
            At The Eunoia State, we want to build a family. We hope to achieve
            three main purposes to ensure that our customers are always
            satisfied and creating their own unique lifestyle.
          </p>
          <p className="Steps">
            <ol>
              <li>Promote individual growth and encourage self-awareness</li>
              <li>Create a welcoming community that is a safe place for all</li>
              <li>Donate and provide hands-on-aid to people in need</li>
            </ol>
          </p>
        </GoalsWrapper>
      </VisionWrapper>
    </div>
  );
};

export default About;

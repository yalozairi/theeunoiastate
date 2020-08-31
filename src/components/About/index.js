import React, { useEffect } from "react";
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
import beach from "../../assets/compressed/dominik-schroder-ivieBAESVWM-unsplash.jpg";
import chart from "../../assets/compressed/Chart.jpg";
import VisionList from "./VisionList";
import Aos from "aos";
import "aos/dist/aos.css";
//TODO: LONGER FADE ANIMATIONS
//TODO: ASK IF ANIMATIONS STAY OR GO
import { Link } from "react-scroll";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <Helmet>
        <title>About | The Eunoia State</title>
      </Helmet>
      <TitleWrapper className="container">
        <p className="Title">GET TO KNOW US</p>
        <p className="Body">
          Eunoia came to be in 2020 as a daily reminder to focus on what gives
          us a fulfilled life.
          <br />
          It is a way of proactive living while creating change in the world.
        </p>
        <p className="Quote">
          Happiness is not something you find. Happiness is a by-product of a
          great lifestyle.
        </p>
        <MoreButtonStyled>
          <Link to="more" smooth={true}>
            Tell Me More
          </Link>
        </MoreButtonStyled>
      </TitleWrapper>
      <BeachWrapper data-aos="fade">
        <Beach src={beach} alt="Beach" />
      </BeachWrapper>
      <VisionWrapper id="more" className="container">
        <div className="row">
          <LeftVisionWrapper className="col-m-6">
            <ChartStyled src={chart} alt="Chart" data-aos="fade"></ChartStyled>
          </LeftVisionWrapper>
          <RightVisionWrapper className="col-m-6">
            <VisionList />
          </RightVisionWrapper>
        </div>
        <GoalsWrapper className="row container">
          <p data-aos="fade" data-aos-delay="1500" className="Title">
            Our Goals
          </p>
          <p data-aos="fade" data-aos-delay="1800" className="Body">
            At The Eunoia State, we want to build a family. We hope to achieve
            three main purposes to ensure that our customers are always
            satisfied and creating their own unique lifestyle.
          </p>
          <p data-aos="fade" data-aos-delay="2100" className="Steps">
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

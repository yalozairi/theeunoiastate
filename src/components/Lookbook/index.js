import React from "react";
import { Helmet } from "react-helmet";
import { ComingSoonWrapper, ComingSoon, ImageWrapper, People } from "./styles";
import people from "../../assets/0.png";

const Lookbook = () => {
  return (
    <div>
      <Helmet>
        <title>Lookbook | The Eunoia State</title>
      </Helmet>
      <ComingSoonWrapper>
        <ComingSoon>coming soon...</ComingSoon>
      </ComingSoonWrapper>
      <ImageWrapper>
        <People src={people} alt="People" />
      </ImageWrapper>
    </div>
  );
};

export default Lookbook;

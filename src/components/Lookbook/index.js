import React from "react";
import { Helmet } from "react-helmet";
import { comingSoonWrapper } from "./styles";

const Lookbook = () => {
  return (
    <div>
      <Helmet>
        <title>Lookbook | The Eunoia State</title>
      </Helmet>
      <comingSoonWrapper>
        <h1>coming soon...</h1>
      </comingSoonWrapper>
    </div>
  );
};

export default Lookbook;

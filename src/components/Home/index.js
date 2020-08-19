import React from "react";
import sea from "../../assets/dominik-schroder-ivieBAESVWM-unsplash.png";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | The Eunoia State</title>
      </Helmet>
      <h1>Home</h1>
      <img src={sea} alt="Sea" style={{ width: "100%" }} />
    </div>
  );
};

export default Home;

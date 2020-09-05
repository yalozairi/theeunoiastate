import React from "react";
import "aos/dist/aos.css";

const VisionList = () => {
  return (
    <>
      <p data-aos="fade" data-aos-duration="1" className="Title">
        OUR VISION
      </p>
      <p data-aos="fade" data-aos-delay="500" className="Body">
        Our vision is to empower communities through <br />
        embarking on individual self-discovery journeys that we <br />
        believe collectively have the power to change the world.
      </p>
      <p data-aos="fade" data-aos-delay="800" className="Steps">
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
      <p data-aos="fade" data-aos-delay="500" className="BodySmall">
        Our vision is to empower communities through embarking on individual
        self-discovery journeys that we believe collectively have the power to
        change the world.
      </p>
      <p data-aos="fade" data-aos-delay="800" className="ListHeader">
        There are three steps that come with this:
      </p>
      <p data-aos="fade" data-aos-delay="800" className="StepsSmall">
        <ol>
          <li>
            Develop yourself: Our products work to help you achieve your ideal
            lifestyle, ultimately maintaining happiness.
          </li>
          <li>
            Help your community: We want you to build a community that you are
            comfortable in, thus promoting positivity.
          </li>
          <li>
            Change the world: Donations are made with every purchase, giving you
            the opportunity to make a difference.
          </li>
        </ol>
      </p>
    </>
  );
};

export default VisionList;

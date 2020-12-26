import React from "react";
import { Helmet } from "react-helmet";
import {
  LookbookWrapper,
  Colors,
  PeopleWrapper,
  People,
  Shop,
  ImageWrapper,
  NotebookImage,
} from "./styles";
import people from "../../assets/compressed/0.jpg";
import photo1 from "../../assets/compressed/lookbook/1.jpg";
import photo2 from "../../assets/compressed/lookbook/2.jpg";
import photo3 from "../../assets/compressed/lookbook/3.jpg";
import photo4 from "../../assets/compressed/lookbook/4.jpg";
import photo5 from "../../assets/compressed/lookbook/5.jpg";
import photo6 from "../../assets/compressed/lookbook/6.jpg";
import photo7 from "../../assets/compressed/lookbook/7.jpg";
import photo8 from "../../assets/compressed/lookbook/8.jpg";
import photo9 from "../../assets/compressed/lookbook/9.jpg";
const Lookbook = () => {
  return (
    <div>
      <Helmet>
        <title>Lookbook | The Eunoia State</title>
      </Helmet>
      <LookbookWrapper>
        <Shop>SHOP</Shop>
        <Colors>Navy Blue, Sky Blue, and Brown</Colors>
      </LookbookWrapper>
      <ImageWrapper>
        <NotebookImage src={photo1} alt="Sky Blue Notebook with pebbles" />
        <NotebookImage src={photo2} alt="Brown Notebook with wheat" />
        <NotebookImage src={photo3} alt="Navy Blue Notebook with teacup" />
        <NotebookImage src={photo4} alt="Navy Blue Notebook with greenery" />
        <NotebookImage src={photo5} alt="White Eunoia Bag with card" />
        <NotebookImage
          src={photo6}
          alt="Navy Blue and Brown Notebooks with Cacti"
        />
        <NotebookImage
          src={photo7}
          alt="Navy Blue and Brown Notebooks with pillow"
        />
        <NotebookImage src={photo8} alt="Sky Blue Notebook with palm tree" />
        <NotebookImage src={photo9} alt="Brown Notebook with cup" />
      </ImageWrapper>

      <PeopleWrapper>
        <People src={people} alt="People" />
      </PeopleWrapper>
    </div>
  );
};

export default Lookbook;

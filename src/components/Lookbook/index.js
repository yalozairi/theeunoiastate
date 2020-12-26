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
  ShopButtonStyled,
  ShopWrapper,
} from "./styles";
import people from "../../assets/People.jpg";
import photo1 from "../../assets/lookbook/1.jpg";
import photo2 from "../../assets/lookbook/2.jpg";
import photo3 from "../../assets/lookbook/3.jpg";
import photo4 from "../../assets/lookbook/4.jpg";
import photo5 from "../../assets/lookbook/5.jpg";
import photo6 from "../../assets/lookbook/6.jpg";
import photo7 from "../../assets/lookbook/7.jpg";
import photo8 from "../../assets/lookbook/8.jpg";
import photo9 from "../../assets/lookbook/9.jpg";
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
      <ShopWrapper>
        <p>Without Sticker Prompts: 8KD</p>
        <p>With Sticker Prompts: 10KD</p>
        <ShopButtonStyled>
          <a
            target="_blank"
            href="https://www.instagram.com/theeunoiastate/"
            rel="noopener noreferrer"
          >
            Shop Now
          </a>
        </ShopButtonStyled>
      </ShopWrapper>
      <PeopleWrapper>
        <People src={people} alt="People" />
      </PeopleWrapper>
    </div>
  );
};

export default Lookbook;

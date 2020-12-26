import styled from "styled-components";
export const LookbookWrapper = styled.div`
  max-height: 260px;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  background-color: ${(props) => props.theme.white};
  text-align: center;
  display: flex;
  justify-content: center;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 3s forwards;

  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100%;
    background-color: ${(props) => props.theme.white};
    text-align: center;
    display: flex;
    justify-content: center;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    animation: fadeIn 3s forwards;
  }
`;

export const Colors = styled.h1`
  color: ${(props) => props.theme.darkBlue};
  font-size: 1.5vw;
  font-family: lato;

  @media screen and (max-width: 768px) {
    color: ${(props) => props.theme.darkBlue};
    font-size: 3vw;
    font-family: lato;
  }

  @media screen and (max-width: 350px) {
    font-size: 7px;
  }
`;

export const Shop = styled.h1`
  color: ${(props) => props.theme.darkBlue};
  text-transform: uppercase;
  /* font-size: 72px; */
  font-size: 5.5vw;
  font-family: lato;
  font-weight: 300;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 2s forwards;

  @media screen and (max-width: 768px) {
    color: ${(props) => props.theme.darkBlue};
    text-transform: uppercase;
    /* font-size: 72px; */
    font-size: 8vw;
    font-family: lato;
    font-weight: 300;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    animation: fadeIn 2s forwards;
  }
  @media screen and (max-width: 350px) {
    font-size: 20px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  /* max-height: 760px; */
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    /* height: 350px; */
  }
`;

export const NotebookImage = styled.img`
  width: 25%;
  margin: 30px;

  /* border: 2px solid ${(props) => props.theme.darkBlue}; */
  object-fit: contain;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 5s forwards;
  @media screen and (max-width: 768px) {
    height: auto;
    width: 30%;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;
export const ShopWrapper = styled.div`
  margin-top: 5vh;
  height: auto;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  :hover {
  }
  p {
    color: ${(props) => props.theme.darkBlue};
    font-size: 1.5vw;
    font-family: lato;

    @media screen and (max-width: 768px) {
      color: ${(props) => props.theme.darkBlue};
      font-size: 3vw;
      font-family: lato;
    }

    @media screen and (max-width: 350px) {
      font-size: 7px;
    }
  }
`;

export const ShopButtonStyled = styled.div`
  margin-top: 45px;
  @media screen and (min-width: 350px) {
    margin-bottom: 30px;
  }
  color: ${(props) => props.theme.darkBlue};

  :hover {
    color: ${(props) => props.theme.white};
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 4s forwards;
  a {
    color: ${(props) => props.theme.darkBlue};
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.darkBlue};
    border-radius: 100px;
    padding: 12px 15px;
    :hover {
      text-decoration: none;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.darkBlue};
      transition: ease 0.4s;
      cursor: pointer;
    }
    @media screen and (max-width: 768px) {
      color: ${(props) => props.theme.darkBlue};
      background-color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme.darkBlue};
      border-radius: 100px;
      font-size: 10px;
      padding: 7px 10.8px;
      :hover {
        text-decoration: none;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme.darkBlue};
        transition: ease 0.4s;
        cursor: pointer;
      }
    }
  }
`;

export const PeopleWrapper = styled.div`
  width: 100%;
  max-height: 760px;
  background-color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 350px;
    width: 100%;
    background-color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
  }
`;

export const People = styled.img`
  max-width: 100%;
  object-fit: contain;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 5s forwards;
`;

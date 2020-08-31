import styled from "styled-components";

export const WelcomeDiv = styled.div`
  width: 100vw;
  max-height: 680px;
  position: relative;
  text-align: center;
`;

export const BeachPic = styled.img`
  width: 100%;
  max-height: 680px;
  object-fit: cover;
`;

export const BeachPicDiv = styled.div`
  z-index: 1;
`;

export const TextAndButton = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 3s forwards;
  height: 100%;
  position: absolute;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const WelcomeText = styled.p`
  text-transform: uppercase;
  font-size: 5.5vw;
  font-weight: 300;
  font-family: lato;
  color: ${(props) => props.theme.darkBlue};
`;

export const WelcomeButton = styled.div`
  margin-top: 70px;
  z-index: 2;

  :hover {
    color: ${(props) => props.theme.white};
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
    z-index: 2;
  }
  a {
    z-index: 2;
    color: ${(props) => props.theme.darkBlue};
    border: 1px solid ${(props) => props.theme.darkBlue};
    border-radius: 100px;
    padding: 12px 17px;
    :hover {
      text-decoration: none;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.darkBlue};
      transition: ease 0.4s;
      cursor: pointer;
    }
    @media screen and (max-width: 768px) {
      z-index: 2;
      font-size: 10px;
      padding: 8px 11.4px;
      color: ${(props) => props.theme.darkBlue};
      border: 1px solid ${(props) => props.theme.darkBlue};
      border-radius: 100px;
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

export const InstaDiv = styled.div`
  align-items: center;
`;

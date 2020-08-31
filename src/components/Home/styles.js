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

export const TextAndButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const WelcomeText = styled.p`
  text-transform: uppercase;
  font-size: 4.7vw;
  font-weight: 300;
  font-family: lato;
  color: ${(props) => props.theme.darkBlue};
`;

export const WelcomeButton = styled.div`
  margin-top: 70px;

  :hover {
    color: ${(props) => props.theme.white};
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 1s forwards;
  a {
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
  }
`;

export const InstaDiv = styled.div`
  align-items: center;
`;

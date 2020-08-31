import styled from "styled-components";

export const TitleWrapper = styled.div`
  height: 600px;
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
    &.Title {
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
        font-size: 7vw;
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
    }
    &.Body {
      color: ${(props) => props.theme.darkBlue};
      font-size: 1.5vw;
      font-family: lato;
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
        color: ${(props) => props.theme.darkBlue};
        font-size: 1.8vw;
        font-family: lato;
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
    }
    &.Quote {
      color: ${(props) => props.theme.darkBlue};
      font-size: 1.1vw;
      font-family: lato;
      font-weight: 100px;
      margin-top: 20px;
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      animation: fadeIn 4s forwards;
      @media screen and (max-width: 768px) {
        color: ${(props) => props.theme.darkBlue};
        font-size: 1.4vw;
        font-family: lato;
        font-weight: 100px;
        margin-top: 20px;
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        animation: fadeIn 4s forwards;
      }
    }
  }
`;

export const MoreButtonStyled = styled.div`
  margin-top: 45px;
  color: ${(props) => props.theme.darkBlue};

  :hover {
    color: ${(props) => props.theme.white};
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
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
      font-size: 11px;
      padding: 9px 11.4px;
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

export const BeachWrapper = styled.div`
  max-height: 640px;
  width: 100%;
  margin-bottom: 130px;
`;

export const Beach = styled.img`
  width: 100vw;
  max-height: 640px;
  object-fit: cover;
  object-position: 50% 100%;
`;

export const VisionWrapper = styled.div`
  /* height: 660px; */
  width: 100%;
  background-color: ${(props) => props.theme.white};
  align-items: center;
  justify-content: center;
`;

export const ChartStyled = styled.img`
  width: 25vw;
  min-width: 480px;
  height: auto;
  object-fit: contain;
`;

export const LeftVisionWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
`;

export const RightVisionWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: block;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 60px;

  p {
    text-align: left;
    font-family: lato;
    color: ${(props) => props.theme.darkBlue};

    &.Title {
      text-transform: uppercase;
      font-size: 40px;
      font-weight: 300;
    }
    &.Body {
      font-size: 18px;
      line-height: 2;
    }
    &.Steps {
      font-size: 15px;
      font-weight: 100px;
      margin-top: 20px;
      line-height: 2;
    }
  }
`;

export const GoalsWrapper = styled.div`
  margin-top: 60px; /* height: 1000px; */
  width: 100%;
  background-color: ${(props) => props.theme.white};
  p {
    text-align: left;
    font-family: lato;
    color: ${(props) => props.theme.darkBlue};

    &.Title {
      text-transform: uppercase;
      font-size: 40px;
      font-weight: 300;
    }
    &.Body {
      font-size: 18px;
      line-height: 2;
    }
    &.Steps {
      font-size: 15px;
      font-weight: 100px;
      margin-top: 20px;
      line-height: 2;
    }
  }
`;

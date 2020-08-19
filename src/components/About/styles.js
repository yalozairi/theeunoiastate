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
      font-size: 72px;
      font-family: lato;
      font-weight: 300;
    }
    &.Body {
      color: ${(props) => props.theme.darkBlue};
      font-size: 20px;
      font-family: lato;
    }
    &.Quote {
      color: ${(props) => props.theme.darkBlue};
      font-size: 15px;
      font-family: lato;
      font-weight: 100px;
      margin-top: 20px;
    }
  }
`;

export const MoreButtonStyled = styled.div`
  margin-top: 45px;
  color: ${(props) => props.theme.darkBlue};

  :hover {
    color: ${(props) => props.theme.white};
  }
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
  }
`;

export const BeachWrapper = styled.div`
  max-height: 640px;
  width: 100%;
`;

export const Beach = styled.img`
  width: 100%;
  max-height: 640px;
  object-fit: cover;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 2s forwards;
  /* TODO: ON SCROLL */
`;

export const VisionWrapper = styled.div`
  height: 660px;
  width: 100%;
  background-color: ${(props) => props.theme.white};
`;

export const ChartStyled = styled.img`
  width: auto;
  height: 500px;
`;

export const LeftVisionWrapper = styled.div`
  width: 50%;
`;

export const RightVisionWrapper = styled.div`
  width: 50%;

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

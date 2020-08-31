import styled from "styled-components";
//TODO SHRINK DEAD SPACE ON SMALLER DEVICES
export const ComingSoonWrapper = styled.div`
  height: 260px;
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
`;

export const ComingSoon = styled.h1`
  color: ${(props) => props.theme.darkBlue};
  font-family: lato;
  font-weight: 200 bold;
  font-size: 35px;
  margin-top: auto;
  margin-bottom: auto;
  letter-spacing: 1px;
`;

export const ImageWrapper = styled.div`
  height: 760px;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
`;

export const People = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 2s forwards;
`;

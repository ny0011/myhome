import MotionDiv, { MotionButton, MotionInput } from "./Motions";
import styled, { keyframes } from "styled-components";
import Div, { A } from "./Tags";

const RADIUS = 60;

export const BookmarkButtonContainer = styled(Div)`
  position: relative;
`;

export const BookmarkButtonToggle = styled(MotionButton)`
  position: absolute;
`;

const aroundCircle = (rotatevalue: number, radius: number) => keyframes`
  from {transform: rotate(${rotatevalue}deg) translateY(${radius}px) rotate(-${rotatevalue}deg)}
    to {transform: rotate(calc(1turn + ${rotatevalue}deg)) translateY(${radius}px) rotate(calc(-1turn - ${rotatevalue}deg))  }
`;

export const BookmarkItemContainer = styled(Div)<{ rotatevalue: number }>`
  @media ${({ theme }) => theme.device.mobile} {
    position: initial;
    animation: none !important;
    width: 200px;
    height: 65px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    animation: ${(props) => aroundCircle(props.rotatevalue, RADIUS * 2)} 20s
      linear infinite;
  }

  width: 160px;
  height: 90px;
  position: absolute;
  text-align: center;
  animation: ${(props) => aroundCircle(props.rotatevalue, RADIUS * 5)} 40s
    linear infinite paused;
`;
export const BookmarkItemList = styled(Div)`
  position: relative;
`;

export const BookmarkItemYoutubeList = styled(A)`
  @media ${({ theme }) => theme.device.mobile} {
    position: initial;
    font-size: 1.2em;
  }
  position: absolute;
  top: -20px;
  font-size: 1em;
  &.inactive {
    display: none;
  }
`;

export const BookmarkItemIconList = styled(Div)`
  @media ${({ theme }) => theme.device.mobile} {
    position: initial;
  }
  position: absolute;
  bottom: -25px;
  width: 60px;
  display: flex;
  justify-content: space-evenly;
`;

export const BookmarkItemIcon = styled(Div)`
  width: 20px;
  height: 20px;
  border: 1px solid ${(props) => props.theme.white.lighter};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.navy.lighter};
  }
`;
export const BookmarkListContainer = styled(Div)`
  @media ${({ theme }) => theme.device.mobile} {
    height: 491px;
    justify-content: flex-start;
  }
  height: 70vh;
  width: 50vw;
  flex-direction: column;
  position: relative;
`;

export const BookmarkFormContainer = styled(MotionDiv)`
  align-items: normal;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
`;

export const BookmarkFormOverlay = styled(MotionDiv)`
  top: 30px;
  width: 300px;
  height: 500px;
  background-color: ${(props) => props.theme.white.lighter};
  border-radius: 15px;
  position: relative;
`;

export const BookmarkFormButton = styled.button`
  padding: 5px 10px;
  font-size: 1.3em;
  border-radius: 20% / 40%;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.pink.lighter};
  width: 80px;
`;

export const BookmarkFormTitle = styled(Div)`
  font-size: 1.5em;
`;

export const BookmarkFormErrorContainer = styled(Div)`
  position: relative;
  width: 100%;
`;

export const BookmarkFormError = styled(Div)`
  font-size: 0.8em;
  position: absolute;
  top: -20px;
`;

export const BookmarkFormInput = styled(MotionInput)`
  margin: 20px 0px 25px 0px;
  border: 3px solid ${(props) => props.theme.pink.lighter};
  background-color: transparent;
  color: black;
`;

export const BookmarkFormCloseContainer = styled(MotionDiv)`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.pink.lighter};
`;

export const BookmarkThumbnailImg = styled.img`
  @media ${({ theme }) => theme.device.mobile} {
    width: 120px;
    height: 90px;
  }
`;
export const BookmarkThumbnailContainer = styled.div`
  margin-top: 10px;
`;

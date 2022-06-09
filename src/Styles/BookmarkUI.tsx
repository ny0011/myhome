import MotionDiv, { MotionButton, MotionInput } from "./Motions";
import styled, { keyframes } from "styled-components";
import Div from "./Tags";

const RADIUS = 15;

export const BookmarkButtonContainer = styled(Div)`
  position: relative;
`;

export const BookmarkButtonToggle = styled(MotionButton)`
  position: absolute;
`;

const aroundCircle = (rotatevalue: number) => keyframes`
  from {transform: rotate(${rotatevalue}deg) translateY(${RADIUS}vh) rotate(-${rotatevalue}deg)}
    to {transform: rotate(calc(1turn + ${rotatevalue}deg)) translateY(${RADIUS}vh) rotate(calc(-1turn - ${rotatevalue}deg))  }
`;

export const BookmarkItemContainer = styled(MotionDiv)<{ rotatevalue: number }>`
  padding: 5px 0px;
  position: absolute;
  text-align: center;
  animation: ${(props) => aroundCircle(props.rotatevalue)} 20s linear infinite
    paused;
`;
export const BookmarkItemList = styled(Div)`
  position: relative;
`;

export const BookmarkItemIconList = styled(Div)`
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
export const BookmarkListContainer = styled(MotionDiv)`
  height: 50vh;
  width: 50vw;
  flex-direction: column;
  position: relative;
`;

const aroundCircleBridge = (rotatevalue: number) => keyframes`
  from {transform: rotate(${rotatevalue}deg) translateY(20px) rotate(calc(-${rotatevalue}deg ) ) }
    to {transform: rotate(calc(1turn + ${rotatevalue}deg)) translateY(20px) rotate(calc(-1turn - ${rotatevalue}deg ))  }
`;

export const BookmarkItemBridge = styled.hr<{ rotatevalue: number }>`
  width: 20px;
  position: absolute;
  animation: ${(props) => aroundCircleBridge(props.rotatevalue)} 20s linear
    infinite paused;
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

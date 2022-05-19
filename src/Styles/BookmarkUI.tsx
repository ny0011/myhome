import MotionDiv, { MotionButton, MotionInput } from "./Motions";
import styled from "styled-components";
import Div from "./Tags";

export const BookmarkButtonContainer = styled(Div)`
  position: relative;
`;

export const BookmarkButtonToggle = styled(MotionButton)`
  position: absolute;
`;

export const BookmarkItemContainer = styled(MotionDiv)`
  margin-bottom: 20px;
  padding: 5px 0px;
`;
export const BookmarkItemList = styled(Div)`
  position: relative;
`;

export const BookmarkItemIconList = styled(Div)`
  position: absolute;
  top: -10px;
  right: -60px;
  width: 60px;
  display: flex;
  justify-content: space-evenly;
`;

export const BookmarkItemIcon = styled(Div)`
  width: 20px;
  height: 20px;
  border: 1px solid ${(props) => props.theme.white.lighter};
  &:hover {
    background-color: ${(props) => props.theme.navy.lighter};
  }
`;
export const BookmarkListContainer = styled(MotionDiv)`
  margin-top: 40px;
  flex-direction: column;
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

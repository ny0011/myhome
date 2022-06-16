import styled from "styled-components";
import MotionDiv from "../Styles/Motions";
import { DivColumn, Input } from "./Tags";
import { MotionButton } from "../Styles/Motions";
import { Form } from "../Styles/Tags";

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const SearchBarContainer = styled(DivColumn)`
  position: relative;
  align-items: flex-end;
`;

export const SearchBarForm = styled(Form)``;

export const SearchBarErrorMsg = styled(MotionDiv)`
  position: absolute;
  bottom: -20px;
  color: ${(props) => props.theme.white.lighter};
`;

export const SearchButtonIcon = styled(MotionButton)`
  margin-right: 20px;
`;

export const SearchBarInput = styled(Input)`
  width: 60%;
  padding: 3px 10px;
  border: none;
  background-color: ${(props) => props.theme.navy.lighter};
  color: ${(props) => props.theme.white.lighter};
`;

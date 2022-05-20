import styled from "styled-components";
import MotionDiv from "../Styles/Motions";
import { DivColumn } from "./Tags";
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

export const SearchBarForm = styled(Form)`
  justify-content: flex-end;
  margin-right: 15px;
`;

export const SearchBarErrorMsg = styled(MotionDiv)`
  position: absolute;
  bottom: -20px;
  color: ${(props) => props.theme.white.lighter};
`;

export const SearchButtonIcon = styled(MotionButton)`
  margin-right: 20px;
`;

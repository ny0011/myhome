import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionButton = styled(motion.button)`
  padding: 5px 10px;
  font-size: 1.3em;
  border-radius: 30% / 40%;
  width: 50px;
  height: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  &:hover {
    background-color: ${(props) => props.theme.navy.lighter};
  }
`;

export const MotionInput = styled(motion.input)`
  border-radius: 10px;
  width: 60%;
  padding: 3px 10px;
  outline: none;
  font-size: 1.2em;
  border: none;
  background-color: ${(props) => props.theme.navy.lighter};
  color: ${(props) => props.theme.white.lighter};
`;

const MotionDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MotionDiv;

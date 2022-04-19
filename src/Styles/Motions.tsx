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
  background-color: ${(props) => props.theme.pink.lighter};
`;

export const MotionInput = styled(motion.input)`
  border-radius: 10px;
  height: 1.8em;
  width: 140px;
  padding: 3px 5px;
  outline: none;
  border: 3px solid ${(props) => props.theme.green.lighter};
`;

const MotionDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MotionDiv;

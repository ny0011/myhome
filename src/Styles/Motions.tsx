import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionButton = styled(motion.button)`
  padding: 5px 10px;
  font-size: 1.3em;
  line-height: 1.5em;
  border-radius: 30% / 40%;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.white.darker};
`;

export const MotionInput = styled(motion.input)`
  border-radius: 10px;
  height: 1.4em;
  padding: 3px 5px;
  outline: none;
  border: 3px solid ${(props) => props.theme.green.lighter};
`;

const MotionDiv = styled(motion.div)``;

export default MotionDiv;

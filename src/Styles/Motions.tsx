import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionButton = styled(motion.button)`
  padding: 5px 10px;
  font-size: 1.3em;
  border-radius: 40%;
  border: none;
`;

export const MotionInput = styled(motion.input)`
  border-radius: 10px;
  height: 1.4em;
`;

const MotionDiv = styled(motion.div)``;

export default MotionDiv;

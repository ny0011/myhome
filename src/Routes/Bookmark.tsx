import { useState } from "react";
import { MotionButton } from "../Styles/Motions";
import styled from "styled-components";
import Div from "../Styles/Tags";

const BookmarkDiv = styled(Div)`
  position: relative;
`;

const BookmarkToggleButton = styled(MotionButton)`
  position: absolute;
`;

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0 },
};

function Bookmark() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleButton = () => setIsOpen((isOpen) => !isOpen);

  return (
    <BookmarkDiv>
      <BookmarkToggleButton
        initial="open"
        variants={variants}
        onClick={toggleButton}
        animate={isOpen ? "open" : "closed"}
      >
        🧡
      </BookmarkToggleButton>
      <BookmarkToggleButton
        initial="close"
        onClick={toggleButton}
        animate={isOpen ? "closed" : "open"}
        variants={variants}
      >
        🤍
      </BookmarkToggleButton>
    </BookmarkDiv>
  );
}

export default Bookmark;

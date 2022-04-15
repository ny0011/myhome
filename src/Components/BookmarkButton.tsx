import { MotionButton } from "../Styles/Motions";
import styled from "styled-components";
import Div from "../Styles/Tags";
import { useRecoilState } from "recoil";
import { bookmarkToggleState } from "../atoms";

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

function BookmarkButton() {
  const [isOpen, setIsOpen] = useRecoilState(bookmarkToggleState);
  const toggleButton = () => setIsOpen((isOpen) => !isOpen);
  return (
    <BookmarkDiv>
      <BookmarkToggleButton
        initial="open"
        variants={variants}
        onClick={toggleButton}
        animate={isOpen ? "open" : "closed"}
      >
        🤍
      </BookmarkToggleButton>
      <BookmarkToggleButton
        initial="close"
        onClick={toggleButton}
        animate={isOpen ? "closed" : "open"}
        variants={variants}
      >
        🧡
      </BookmarkToggleButton>
    </BookmarkDiv>
  );
}

export default BookmarkButton;

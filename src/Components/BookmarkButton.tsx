import { MotionButton } from "../Styles/Motions";
import styled from "styled-components";
import Div from "../Styles/Tags";
import { useRecoilState } from "recoil";
import { bookmarkListAnimationState, bookmarkToggleState } from "../atoms";
import { BookmarkIcon, BookmarkIconInverse } from "../Styles/Icons";

const BookmarkDiv = styled(Div)`
  position: relative;
`;

const BookmarkToggleButton = styled(MotionButton)`
  position: absolute;
`;

const variants = {
  rest: { scale: 1 },
  pressed: { scale: 0.5 },
};

function BookmarkButton() {
  const [isOpen, setIsOpen] = useRecoilState(bookmarkToggleState);
  const [isAnimated, setIsAnimated] = useRecoilState(
    bookmarkListAnimationState
  );
  const toggleButton = (e: any) => {
    setIsAnimated(true);
    setIsOpen((isOpen) => !isOpen);
    setTimeout(() => {
      setIsAnimated(false);
    }, 800);
  };
  return (
    <BookmarkDiv>
      <BookmarkToggleButton
        variants={variants}
        initial="rest"
        whileTap="pressed"
        onClick={toggleButton}
        disabled={isAnimated}
      >
        {isOpen ? <BookmarkIconInverse /> : <BookmarkIcon />}
      </BookmarkToggleButton>
    </BookmarkDiv>
  );
}

export default BookmarkButton;

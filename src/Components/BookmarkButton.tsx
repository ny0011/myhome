import { useRecoilState } from "recoil";
import { bookmarkListAnimationState, bookmarkToggleState } from "../atoms";
import {
  BookmarkButtonContainer,
  BookmarkButtonToggle,
} from "../Styles/BookmarkUI";
import { BookmarkIcon, BookmarkIconInverse } from "../Styles/Icons";

const variants = {
  rest: { scale: 1 },
  pressed: { scale: 0.5 },
};

function BookmarkButton() {
  const [isOpen, setIsOpen] = useRecoilState(bookmarkToggleState);
  const [isAnimated, setIsAnimated] = useRecoilState(
    bookmarkListAnimationState
  );
  const toggleButton = () => {
    setIsAnimated(true);
    setIsOpen((isOpen) => !isOpen);
    setTimeout(() => {
      setIsAnimated(false);
    }, 600);
  };
  return (
    <BookmarkButtonContainer>
      <BookmarkButtonToggle
        variants={variants}
        initial="rest"
        whileTap="pressed"
        onTapStart={toggleButton}
        disabled={isAnimated}
      >
        {isOpen ? <BookmarkIconInverse /> : <BookmarkIcon />}
      </BookmarkButtonToggle>
    </BookmarkButtonContainer>
  );
}

export default BookmarkButton;

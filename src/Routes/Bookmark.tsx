import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { bookmarkNumberState } from "../atoms";
import BookmarkButton from "../Components/BookmarkButton";
import BookmarkForm from "../Components/BookmarkForm";
import BookmarkList from "../Components/BookmarkList";
import MotionDiv from "../Styles/Motions";

const Overlay = styled(MotionDiv)`
  width: 80%;
  height: 70%;
  position: absolute;
  top: 30px;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function Bookmark() {
  const isClicked = useRecoilValue(bookmarkNumberState);
  return (
    <>
      <BookmarkButton />
      <BookmarkList />
      <AnimatePresence>
        {isClicked && (
          <Overlay
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BookmarkForm number={isClicked} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
}

export default Bookmark;

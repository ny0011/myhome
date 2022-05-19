import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { bookmarkNumberState } from "../atoms";
import BookmarkButton from "../Components/BookmarkButton";
import BookmarkForm from "../Components/BookmarkForm";
import BookmarkList from "../Components/BookmarkList";

function Bookmark() {
  const isClicked = useRecoilValue(bookmarkNumberState);
  return (
    <>
      <BookmarkButton />
      <BookmarkList />
      <AnimatePresence>
        {isClicked && <BookmarkForm number={isClicked} />}
      </AnimatePresence>
    </>
  );
}

export default Bookmark;

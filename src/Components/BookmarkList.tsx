import { useRecoilValue } from "recoil";
import { bookmarkState, bookmarkToggleState } from "../atoms";
import BookmarkItem from "./BookmarkItem";
import { AnimatePresence } from "framer-motion";
import { BookmarkListContainer } from "../Styles/BookmarkUI";

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function BookmarkList() {
  const bookmarks = useRecoilValue(bookmarkState);
  const isOpen = useRecoilValue(bookmarkToggleState);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <BookmarkListContainer
          initial="closed"
          variants={listVariants}
          animate="open"
          exit="closed"
        >
          {bookmarks.map((bookmark) => {
            return (
              <BookmarkItem
                id={bookmark.id}
                link={bookmark.link}
                title={bookmark.title}
                key={bookmark.id}
              />
            );
          })}
        </BookmarkListContainer>
      )}
    </AnimatePresence>
  );
}

export default BookmarkList;

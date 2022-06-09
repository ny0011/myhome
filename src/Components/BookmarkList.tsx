import { useRecoilValue } from "recoil";
import { bookmarkState, bookmarkToggleState } from "../atoms";
import BookmarkItem from "./BookmarkItem";
import { AnimatePresence } from "framer-motion";
import { BookmarkListContainer } from "../Styles/BookmarkUI";

function BookmarkList() {
  const bookmarks = useRecoilValue(bookmarkState);
  const isOpen = useRecoilValue(bookmarkToggleState);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <BookmarkListContainer>
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

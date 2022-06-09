import { useRecoilValue } from "recoil";
import { bookmarkState } from "../atoms";
import BookmarkItem from "./BookmarkItem";
import { BookmarkListContainer } from "../Styles/BookmarkUI";

function BookmarkList() {
  const bookmarks = useRecoilValue(bookmarkState);

  return (
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
  );
}

export default BookmarkList;

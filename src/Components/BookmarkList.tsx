import { useRecoilValue } from "recoil";
import { bookmarkState, newVideoState } from "../atoms";
import BookmarkItem from "./BookmarkItem";
import { BookmarkListContainer } from "../Styles/BookmarkUI";

function BookmarkList() {
  const bookmarks = useRecoilValue(bookmarkState);
  const newvideo = useRecoilValue(newVideoState);

  return (
    <BookmarkListContainer>
      {newvideo.title ? (
        <img
          src={newvideo.thumbnail.url}
          height={newvideo.thumbnail.height}
          width={newvideo.thumbnail.width}
          alt="newvideo thumbnail"
        />
      ) : null}
      {bookmarks.map((bookmark) => {
        return (
          <BookmarkItem
            id={bookmark.id}
            link={bookmark.link}
            title={bookmark.title}
            key={bookmark.id}
          ></BookmarkItem>
        );
      })}
    </BookmarkListContainer>
  );
}

export default BookmarkList;

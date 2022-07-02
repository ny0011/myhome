import { useRecoilValue } from "recoil";
import { bookmarkState, newVideoState } from "../atoms";
import BookmarkItem from "./BookmarkItem";
import { BookmarkListContainer } from "../Styles/BookmarkUI";
import { theme } from "../theme";
import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function BookmarkList() {
  const bookmarks = useRecoilValue(bookmarkState);
  const newvideo = useRecoilValue(newVideoState);
  const { height, width } = useWindowDimensions();
  const tablet = parseInt(theme.device.tablet.split(" ")[3].split("px")[0]);

  return (
    <BookmarkListContainer>
      {newvideo.title && width > tablet ? (
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

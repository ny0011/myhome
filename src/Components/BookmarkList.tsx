import { useRecoilValue } from "recoil";
import { bookmarkState, newVideoState } from "../atoms";
import BookmarkItem from "./BookmarkItem";
import {
  BookmarkListContainer,
  BookmarkThumbnailContainer,
  BookmarkThumbnailImg,
} from "../Styles/BookmarkUI";
import { theme } from "../theme";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

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
  const mobile = parseInt(theme.device.mobile.split(" ")[3].split("px")[0]);
  const videourl = `https://www.youtube.com/watch?v=${newvideo.videoId}`;

  return (
    <BookmarkListContainer>
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
      <AnimatePresence initial={false}>
        {newvideo.title && (width > tablet || width < mobile) ? (
          <BookmarkThumbnailContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <a href={videourl}>
              <BookmarkThumbnailImg
                src={newvideo.thumbnail.url}
                height={newvideo.thumbnail.height}
                width={newvideo.thumbnail.width}
                alt="newvideo thumbnail"
              />
            </a>
          </BookmarkThumbnailContainer>
        ) : null}
      </AnimatePresence>
    </BookmarkListContainer>
  );
}

export default BookmarkList;
//

import MotionDiv from "../Styles/Motions";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkState, bookmarkToggleState } from "../atoms";
import BookmarkItem from "./BookmarkItem";

const ListDiv = styled(MotionDiv)`
  margin-top: 40px;
  flex-direction: column;
`;

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function BookmarkList() {
  const [bookmarks, setBookmarks] = useRecoilState(bookmarkState);
  const isOpen = useRecoilValue(bookmarkToggleState);

  return (
    <ListDiv
      initial="closed"
      variants={listVariants}
      animate={isOpen ? "open" : "closed"}
    >
      {bookmarks.map((bookmark) => {
        return (
          <BookmarkItem
            id={bookmark.id}
            link={bookmark.link}
            title={bookmark.title}
          />
        );
      })}
    </ListDiv>
  );
}

export default BookmarkList;

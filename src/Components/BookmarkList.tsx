import MotionDiv from "../Styles/Motions";
import styled from "styled-components";
import Div from "../Styles/Tags";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkState, bookmarkToggleState } from "../atoms";

const ListDiv = styled(MotionDiv)`
  margin-top: 40px;
  flex-direction: column;
`;

const Item = styled(Div)`
  margin-bottom: 20px;
`;

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0 },
};

function BookmarkList() {
  const [bookmarks, setBookmarks] = useRecoilState(bookmarkState);
  const isOpen = useRecoilValue(bookmarkToggleState);

  return (
    <ListDiv
      initial="open"
      variants={variants}
      animate={isOpen ? "open" : "closed"}
    >
      {bookmarks.map((bookmark) => {
        return (
          <Item key={bookmark.id}>
            <a href={bookmark.link} rel="noreferrer noopener" target="_blank">
              {bookmark.title}
            </a>
          </Item>
        );
      })}
    </ListDiv>
  );
}

export default BookmarkList;

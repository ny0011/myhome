import { useSetRecoilState } from "recoil";
import { A } from "../Styles/Tags";
import { bookmarkNumberState, bookmarkState, IBookmark } from "../atoms";
import { DeleteIcon, EditIcon, PlusIcon } from "../Styles/Icons";
import {
  BookmarkItemContainer,
  BookmarkItemIcon,
  BookmarkItemIconList,
  BookmarkItemList,
} from "../Styles/BookmarkUI";
import MotionDiv from "../Styles/Motions";

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -50 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function BookmarkItem({ id, link, title }: IBookmark) {
  const setIsClicked = useSetRecoilState(bookmarkNumberState);
  const handleEditClick = () => {
    setIsClicked(id);
  };

  const setBookmark = useSetRecoilState(bookmarkState);
  const handleDeleteClick = () => {
    setBookmark((bookmarks) => {
      return bookmarks.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return { id: id, title: "", link: "" };
      });
    });
  };

  return (
    <>
      {title ? (
        <BookmarkItemContainer variants={itemVariants}>
          <BookmarkItemList>
            <A href={link} rel="noreferrer noopener" target="_blank">
              {title}
            </A>
            <BookmarkItemIconList>
              <BookmarkItemIcon onClick={handleEditClick}>
                <EditIcon size={15} />
              </BookmarkItemIcon>
              <BookmarkItemIcon onClick={handleDeleteClick}>
                <DeleteIcon size={15} />
              </BookmarkItemIcon>
            </BookmarkItemIconList>
          </BookmarkItemList>
        </BookmarkItemContainer>
      ) : (
        <BookmarkItemContainer
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <MotionDiv onClick={handleEditClick}>
            <PlusIcon />
          </MotionDiv>
        </BookmarkItemContainer>
      )}
    </>
  );
}

export default BookmarkItem;

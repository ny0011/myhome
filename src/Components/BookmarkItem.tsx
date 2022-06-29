import { useRecoilValue, useSetRecoilState } from "recoil";
import { A } from "../Styles/Tags";
import {
  bookmarkNumberState,
  bookmarkState,
  IBookmark,
  lengthBookmark,
  isYoutuberLink,
} from "../atoms";
import { DeleteIcon, EditIcon, PlusIcon } from "../Styles/Icons";
import {
  BookmarkItemBridge,
  BookmarkItemContainer,
  BookmarkItemIcon,
  BookmarkItemIconList,
  BookmarkItemList,
} from "../Styles/BookmarkUI";
import MotionDiv from "../Styles/Motions";
import Youtube from "./Youtube";

function BookmarkItem({ id, link, title }: IBookmark) {
  const setIsClicked = useSetRecoilState(bookmarkNumberState);
  const isYoutuber = useRecoilValue(isYoutuberLink(id));
  console.log(isYoutuber);
  const handleEditClick = () => {
    setIsClicked(id);
  };

  const length = useRecoilValue(lengthBookmark);
  const rotatevalue = (id - 1) * (360 / length);

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
        <BookmarkItemContainer rotatevalue={rotatevalue}>
          <BookmarkItemList>
            {isYoutuber ? <Youtube link={isYoutuber} /> : null}
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
        <BookmarkItemContainer rotatevalue={rotatevalue}>
          <MotionDiv onClick={handleEditClick} style={{ cursor: "pointer" }}>
            <PlusIcon />
          </MotionDiv>
        </BookmarkItemContainer>
      )}
    </>
  );
}

export default BookmarkItem;

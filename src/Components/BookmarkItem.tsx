import MotionDiv from "../Styles/Motions";
import styled from "styled-components";
import Div, { A } from "../Styles/Tags";
import { bookmarkNumberState, bookmarkState, IBookmark } from "../atoms";
import { DeleteIcon, EditIcon, PlusIcon } from "../Styles/Icons";
import { useSetRecoilState } from "recoil";

const Item = styled(MotionDiv)`
  margin-bottom: 20px;
  padding: 5px 0px;
`;

const ItemDiv = styled(Div)`
  position: relative;
`;

const IconListDiv = styled(Div)`
  position: absolute;
  top: -10px;
  right: -60px;
  width: 60px;
  display: flex;
  justify-content: space-evenly;
  /*opacity: 0;
  &:hover,
  &:focus {
    opacity: 1;
  }*/
`;

const IconDiv = styled(Div)`
  width: 20px;
  height: 20px;
  border: 1px solid ${(props) => props.theme.white.lighter};
  &:hover {
    background-color: ${(props) => props.theme.navy.lighter};
  }
`;

const Plus = styled(MotionDiv)``;

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
        <Item variants={itemVariants}>
          <ItemDiv>
            <A href={link} rel="noreferrer noopener" target="_blank">
              {title}
            </A>
            <IconListDiv>
              <IconDiv onClick={handleEditClick}>
                <EditIcon size={15} />
              </IconDiv>
              <IconDiv onClick={handleDeleteClick}>
                <DeleteIcon size={15} />
              </IconDiv>
            </IconListDiv>
          </ItemDiv>
        </Item>
      ) : (
        <Item
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <Plus onClick={handleEditClick}>
            <PlusIcon />
          </Plus>
        </Item>
      )}
    </>
  );
}

export default BookmarkItem;

import MotionDiv from "../Styles/Motions";
import styled from "styled-components";
import Div, { A } from "../Styles/Tags";
import { IBookmark } from "../atoms";
import { EditIcon, PlusIcon } from "../Styles/Icons";

const Item = styled(MotionDiv)`
  margin-bottom: 20px;
  padding: 5px 0px;
`;

const ItemDiv = styled(Div)`
  position: relative;
`;

const IconDiv = styled(Div)`
  position: absolute;
  top: -10px;
  right: -30px;
  opacity: 0;
  &:hover,
  &:focus {
    opacity: 1;
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
  return (
    <>
      {title ? (
        <Item variants={itemVariants}>
          <ItemDiv>
            <A href={link} rel="noreferrer noopener" target="_blank">
              {title}
            </A>
            <IconDiv>
              <EditIcon size={20} />
            </IconDiv>
          </ItemDiv>
        </Item>
      ) : (
        <Item
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <Plus>
            <PlusIcon />
          </Plus>
        </Item>
      )}
    </>
  );
}

export default BookmarkItem;

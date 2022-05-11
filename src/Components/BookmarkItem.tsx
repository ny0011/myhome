import MotionDiv from "../Styles/Motions";
import styled from "styled-components";
import { A } from "../Styles/Tags";
import { IBookmark } from "../atoms";
import { EditIcon, PlusIcon } from "../Styles/Icons";

const Item = styled(MotionDiv)`
  margin-bottom: 20px;
  padding: 5px 0px;
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
    <Item
      variants={itemVariants}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {title ? (
        <>
          <A href={link} rel="noreferrer noopener" target="_blank">
            {title}
          </A>
          <PlusIcon />
          <EditIcon />
        </>
      ) : (
        <Plus>
          <PlusIcon />
        </Plus>
      )}
    </Item>
  );
}

export default BookmarkItem;

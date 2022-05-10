import {
  FcLikePlaceholder,
  FcLike,
  FcSearch,
  FcCancel,
  FcPlus,
} from "react-icons/fc";

const ICON_SIZE = 28;

export const SearchIcon = () => {
  return <FcSearch size={ICON_SIZE} />;
};

export const CloseIcon = () => {
  return <FcCancel size={ICON_SIZE} />;
};

export const BookmarkIcon = () => {
  return <FcLike size={ICON_SIZE} />;
};

export const BookmarkIconInverse = () => {
  return <FcLikePlaceholder size={ICON_SIZE} />;
};

export const PlusIcon = () => {
  return <FcPlus size={ICON_SIZE} />;
};

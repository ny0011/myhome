import { FcLikePlaceholder, FcLike, FcSearch, FcCancel } from "react-icons/fc";

export const SearchIcon = () => {
  return <FcSearch size={28} />;
};

export const CloseIcon = () => {
  return <FcCancel size={28} />;
};

export const BookmarkIcon = () => {
  return <FcLike size={28} />;
};

export const BookmarkIconInverse = () => {
  return <FcLikePlaceholder size={28} />;
};

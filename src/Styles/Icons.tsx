import {
  FcLikePlaceholder,
  FcLike,
  FcSearch,
  FcCancel,
} from "react-icons/fc";

import { FiEdit2, FiPlusCircle } from "react-icons/fi";

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
  return <FiPlusCircle size={ICON_SIZE} />;
};

export const EditIcon = () => {
  return <FiEdit2 size={ICON_SIZE} />;
};


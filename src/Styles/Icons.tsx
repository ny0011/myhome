import { FcLikePlaceholder, FcLike, FcSearch, FcCancel } from "react-icons/fc";

import { FiEdit2, FiPlusCircle, FiX } from "react-icons/fi";

const ICON_SIZE = 28;

interface IconProps {
  size?: number;
}

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
  return <FiPlusCircle size={ICON_SIZE} color="white" />;
};

export const EditIcon = ({ size }: IconProps) => {
  return <FiEdit2 size={size ? size : ICON_SIZE} color="white" />;
};
export const DeleteIcon = ({ size }: IconProps) => {
  return <FiX size={size ? size : ICON_SIZE} color="white" />;
};

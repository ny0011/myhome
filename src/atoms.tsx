import { atom } from "recoil";

export interface IBookmark {
  id: number;
  title: string;
  link: string;
}

const DEFAULT_BOOKMARK = [
  { id: 1, title: "꼬들", link: "https://kordle.kr/" },
  {
    id: 2,
    title: "우좜마",
    link: "https://www.youtube.com/channel/UC2NFRq9s2neD_Ml0tPhNC2Q",
  },
];

export const bookmarkState = atom<IBookmark[]>({
  key: "bookmarks",
  default: DEFAULT_BOOKMARK,
});

export const bookmarkToggleState = atom({
  key: "bookmarkToggle",
  default: false,
});

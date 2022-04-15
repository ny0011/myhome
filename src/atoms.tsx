import { atom, selector } from "recoil";

export interface IBookmark {
  id: number;
  title: string;
  link: string;
}

const DEFAULT_BOOKMARK = [{ id: 1, title: "꼬들", link: "https://kordle.kr/" }];

export const bookmarkState = atom<IBookmark[]>({
  key: "bookmark",
  default: DEFAULT_BOOKMARK,
});

export const bookmarkToggleState = atom({
  key: "bookmarkToggle",
  default: false,
});

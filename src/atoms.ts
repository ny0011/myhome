import { atom } from "recoil";

export const searchToggleState = atom({
  key: "searchToggle",
  default: false,
});

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
  {
    id: 3,
    title: "승빠일상",
    link: "https://www.youtube.com/channel/UCs1R9zP6rH2GlTNHUI5SBkw",
  },
  {
    id: 4,
    title: "",
    link: "",
  },
  {
    id: 5,
    title: "",
    link: "",
  },
  {
    id: 6,
    title: "",
    link: "",
  },
];

const SaveBookmarks = (key: string, bookmarks: IBookmark[]) => {
  localStorage.setItem(key, JSON.stringify(bookmarks));
};

const LoadBookmarks = (key: string) => {
  return JSON.parse(
    localStorage.hasOwnProperty(key)
      ? (localStorage.getItem(key) as any)
      : SaveBookmarks(key, DEFAULT_BOOKMARK)
  );
};

const bookmarkEffects =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    setSelf(LoadBookmarks(key));
    onSet((newValue: IBookmark[]) => {
      SaveBookmarks(key, newValue);
    });
  };

export const bookmarkState = atom<IBookmark[]>({
  key: "bookmarks",
  default: DEFAULT_BOOKMARK,
  effects_UNSTABLE: [bookmarkEffects("bookmarks")],
});

export const bookmarkToggleState = atom({
  key: "bookmarkToggle",
  default: false,
});

export const bookmarkListAnimationState = atom({
  key: "bookmarkListAnimation",
  default: false,
});

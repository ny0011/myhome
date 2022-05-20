import { atom, selector } from "recoil";

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
    title: "워들",
    link: "https://www.nytimes.com/games/wordle/index.html",
  },
  {
    id: 3,
    title: "쿼들",
    link: "https://www.quordle.com/#/",
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
  default: true,
});

export const bookmarkListAnimationState = atom({
  key: "bookmarkListAnimation",
  default: false,
});

export const bookmarkNumberState = atom({
  key: "bookmarkNumber",
  default: 0,
});

export const filterBookmark = selector({
  key: "filterBookmark",
  get: ({ get }) => {
    const bookmarks = get(bookmarkState);
    const number = get(bookmarkNumberState);

    return bookmarks.filter((bookmark) => bookmark.id === number)[0];
  },
});

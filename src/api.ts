const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_API_LINK = "https://www.googleapis.com/youtube/v3/channels";

interface IThumbnails {
  default: {
    height: number;
    url: string;
    width: number;
  };
}

export interface IYoutuber {
  thumbnails: IThumbnails;
  title: string;
}

export const getYoutubers = (link: string) => {
  return fetch(
    `${CHANNEL_API_LINK}/?part=snippet&id=${link}&key=${YOUTUBE_API_KEY}`
  )
    .then((response) => response.json())
    .then((response) => {
      const { thumbnails, title } = response.items[0].snippet;
      const t = thumbnails?.default;
      const youtuber: IYoutuber = {
        title,
        thumbnails: { default: t },
      };
      return youtuber;
    });
};

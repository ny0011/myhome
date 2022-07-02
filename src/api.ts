const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const YOUTUBE_LINK = "https://www.googleapis.com/youtube/v3";
const CHANNEL_API_LINK = `${YOUTUBE_LINK}/channels`;
const PLAYLISTITEM_API_LINK = `${YOUTUBE_LINK}/playlistItems`;

interface IThumbnail {
  height: number;
  url: string;
  width: number;
}
export interface IYoutuberInfo {
  thumbnails: IThumbnail;
  title: string;
}
export interface INewVideo {
  videoId: string;
  videoPublishedAt: string;
  thumbnail: IThumbnail;
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
      const youtuber: IYoutuberInfo = {
        title,
        thumbnails: t,
      };
      return youtuber;
    });
};

export const getUploadLink = (link: string) => {
  return fetch(
    `${CHANNEL_API_LINK}/?part=contentDetails&id=${link}&key=${YOUTUBE_API_KEY}`
  )
    .then((response) => response.json())
    .then((response) => {
      const { uploads } = response.items[0].contentDetails.relatedPlaylists;
      return uploads;
    });
};

export const getNewVideos = (link: string) => {
  return fetch(
    `${PLAYLISTITEM_API_LINK}/?part=snippet&playlistId=${link}&key=${YOUTUBE_API_KEY}&maxResults=1`
  )
    .then((response) => response.json())
    .then((response) => {
      const {
        thumbnails: { medium: thumbnail },
        resourceId: { videoId },
        publishedAt: videoPublishedAt,
        title,
      } = response.items[0].snippet;

      return { videoId, videoPublishedAt, thumbnail, title };
    });
};

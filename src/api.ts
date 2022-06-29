const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const YOUTUBE_LINK = "https://www.googleapis.com/youtube/v3";
const CHANNEL_API_LINK = `${YOUTUBE_LINK}/channels`;
const PLAYLISTITEM_API_LINK = `${YOUTUBE_LINK}/playlistItems`;

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
export interface IChannelsList {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: any[];
}
export interface INewVideo {
  videoId: string;
  videoPublishedAt: string;
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
    `${PLAYLISTITEM_API_LINK}/?part=contentDetails&playlistId=${link}&key=${YOUTUBE_API_KEY}&maxResults=1`
  )
    .then((response) => response.json())
    .then((response) => {
      const { videoId, videoPublishedAt } = response.items[0].contentDetails;

      return { videoId, videoPublishedAt };
    });
};

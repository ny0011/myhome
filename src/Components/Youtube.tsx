import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { getNewVideos, INewVideo, getUploadLink } from "../api";
import { youtuberState } from "../atoms";
import { BookmarkItemYoutubeList } from "../Styles/BookmarkUI";

interface Iprops {
  link: string;
}
interface ResultWithPrevious {
  current?: INewVideo;
  previous?: INewVideo;
}

const HOUR = 1000 * 60 * 60;
const HALF_DAY = HOUR * 12;
const DAY = HALF_DAY * 2;

const fetchWithPrevious = async (link: string, previous: any) => {
  const uploadLink = await getUploadLink(link);
  const newvideo = await getNewVideos(uploadLink);
  if (previous === undefined) return newvideo;
  if (previous?.current === undefined)
    return { previous: previous, current: newvideo };
  return { previous: previous.current, current: newvideo };
};

const queryOptions = { refetchOnWindowFocus: false, keepPreviousData: true };

function Youtube({ link }: Iprops) {
  //const [isUpdatedOneDay, setIsUpdatedOneDay] = useState(true);
  const [isActive, setActive] = useState(false);

  const useYoutubers = () => {
    const queryClient = useQueryClient();
    const previous = queryClient.getQueryData<INewVideo | ResultWithPrevious>([
      "youtuber_newvideo",
      link,
    ]);
    return useQuery(["youtuber_newvideo", link], () =>
      fetchWithPrevious(link, previous)
    );
  };

  const {
    data: newvideo,
    isLoading,
    isFetched,
  } = useQuery<INewVideo>(
    ["youtuber_newvideo", link],
    async () => {
      const uploadLink = await getUploadLink(link);
      return await getNewVideos(uploadLink);
    },
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );
  console.log(newvideo, isFetched);
  const url = `https://www.youtube.com/watch?v=${newvideo?.videoId}`;

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      {isLoading ? (
        <div>...</div>
      ) : (
        <BookmarkItemYoutubeList
          className={isActive ? undefined : "inactive"}
          onClick={handleClick}
          href={url}
          rel="noreferrer noopener"
          target="_blank"
        >
          !!!
        </BookmarkItemYoutubeList>
      )}
    </>
  );
}

export default Youtube;

/*
refetchInterval: (newvideo) => {
        const now = new Date().getTime();
        if (newvideo === undefined) return HOUR
        const uploaded = new Date(newvideo.videoPublishedAt).getTime() ;
        
        if (now - uploaded >  DAY) {
          setIsUpdatedOneDay(false)
          return HOUR
        }
      return 
    } 



type ResultWithPrevious<T> = {
  current: T;
  previous?: T;
};
    interface IFetchProps {
  link: string;
  previous: ResultWithPrevious<T>;
}
  const fetchWithPrevious:Promise<ResultWithPrevious<T>> = async <T>(link, previous?) =>{
    const uploadLink = await getUploadLink(link);
    const newvideo = await getNewVideos(uploadLink);
    return {previous: previous.current, current: newvideo}
  }
    */

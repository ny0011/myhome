import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getNewVideos, INewVideo, getUploadLink } from "../api";
import { newVideoState } from "../atoms";
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

const queryOptions = { refetchOnWindowFocus: false, keepPreviousData: true };

function Youtube({ link }: Iprops) {
  //const [isUpdatedOneDay, setIsUpdatedOneDay] = useState(true);
  const [isActive, setActive] = useState(true);
  const setNewVideoState = useSetRecoilState(newVideoState);

  const fetchWithPrevious = async (link: string, previous: any) => {
    const uploadLink = await getUploadLink(link);
    const newvideo = await getNewVideos(uploadLink);
    if (previous === undefined) return newvideo;
    if (previous.videoId === newvideo.videoId && !isActive) {
      setActive(false);
    } else {
      setActive(true);
    }
    return newvideo;
  };
  const useYoutubers = () => {
    const queryClient = useQueryClient();
    const previous = queryClient.getQueryData<INewVideo>([
      "youtuber_newvideo",
      link,
    ]);
    return useQuery(
      ["youtuber_newvideo", link],
      () => fetchWithPrevious(link, previous),
      queryOptions
    );
  };

  const { data: newvideo, isLoading } = useYoutubers();
  const url = `https://www.youtube.com/watch?v=${newvideo?.videoId}`;

  const handleClick = () => {
    setActive(!isActive);
  };

  const handleMouseOver = () => {
    if (!newvideo) return;
    setNewVideoState(newvideo);
  };

  return (
    <>
      {isLoading ? (
        <div>...</div>
      ) : (
        <BookmarkItemYoutubeList
          className={isActive ? undefined : "inactive"}
          onMouseOver={handleMouseOver}
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

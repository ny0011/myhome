import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import { getNewVideos, INewVideo, getUploadLink } from "../api";
import { newVideoState } from "../atoms";
import { BookmarkItemYoutubeList } from "../Styles/BookmarkUI";

interface Iprops {
  link: string;
}

const queryOptions = { refetchOnWindowFocus: false, keepPreviousData: true };

function Youtube({ link }: Iprops) {
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

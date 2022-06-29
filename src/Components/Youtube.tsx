import { useQuery } from "react-query";
import { getNewVideos, INewVideo, getUploadLink } from "../api";

interface Iprops {
  link: string;
}

function Youtube({ link }: Iprops) {
  const { data, isLoading } = useQuery<INewVideo>(
    ["youtuber", link],
    async () => {
      const uploadLink = await getUploadLink(link);
      return await getNewVideos(uploadLink);
    },
    { refetchOnWindowFocus: false }
  );
  console.log(data);
  const url = `https://www.youtube.com/watch?v=${data?.videoId}`;

  return <div>{isLoading ? <div>...</div> : <a href={url}>YAY</a>}</div>;
}

export default Youtube;

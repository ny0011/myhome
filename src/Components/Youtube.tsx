import { useQuery } from "react-query";
import { IYoutuber, getYoutubers } from "../api";

interface Iprops {
  link: string;
}

function Youtube({ link }: Iprops) {
  const { data, isLoading } = useQuery<any>(["youtuber", link]);
  console.log(getYoutubers(link));
  return <div>{isLoading ? <div>...</div> : <div>YAY</div>}</div>;
}

export default Youtube;

import { useSearchParams } from "react-router-dom";
import { Youtube_Api_Key } from "./utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import SearchResultVIdeoCard from "./SearchResultVIdeoCard";

function SearchResults() {
  const [video, setVideo] = useState([]);
  const [params] = useSearchParams();

  const searchResults = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
        params.get("v") +
        "&key=" +
        Youtube_Api_Key
    );
    const json = await data?.json();
    // setVideo(json);
    console.log(json);
    setVideo(json?.items);
  };
  useEffect(() => {
    searchResults();
  }, [params]);

  return (
    <div className="flex flex-wrap">
      {video.map((video) => (
        <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
          {" "}
          <SearchResultVIdeoCard info={video} />
        </Link>
      ))}
    </div>
  );
}
export default SearchResults;

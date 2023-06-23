import { useEffect, useState } from "react";
import { YouTubeApi } from "./utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
function VideoContainer() {
  useEffect(() => {
    getVideos();
  }, []);

  const [video, setVideo] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YouTubeApi);
    const json = await data?.json();

    setVideo(json?.items);
  };
  // console.log(video);
  return (
    <div className="flex flex-wrap">
      {video.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          {" "}
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}
export default VideoContainer;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Youtube_gaming_icon_link,
  Youtube_history_icon_link,
  Youtube_home_icon_link,
  Youtube_library_icon_link,
  Youtube_likedVideos_icon_link,
  Youtube_movies_icon_link,
  Youtube_musics_icon_link,
  Youtube_shorts_icon_link,
  Youtube_sports_icon_link,
  Youtube_subscription_icon_link,
  Youtube_watchLater_icon_link,
  Youtube_yourVideos_icon_link,
} from "./utils/constants";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return !isMenuOpen ? null : (
    <div className="">
      <div className="p-2 m-2 bg-blue-300 w-52 shadow-xl rounded-lg sticky top-16">
        <ul className="p-3">
          <Link to={"/VideoVerse"}>
            <div className="flex  items-center hover:bg-blue-200 rounded-lg p-1">
              <img className="w-8 h-8" src={Youtube_home_icon_link} alt="" />
              <li className="p-2 text-center cursor-pointer">Home</li>
            </div>
          </Link>
          <div className="flex  items-center hover:bg-blue-200 rounded-lg p-1">
            <img className="w-8 h-8" src={Youtube_shorts_icon_link} alt="" />
            <li className="p-2 text-center ">shorts</li>
          </div>
          <div className="flex  items-center hover:bg-blue-200 rounded-lg p-1">
            <img
              className="w-8 h-8"
              src={Youtube_subscription_icon_link}
              alt=""
            />
            <li className="p-2 text-center ">subscription</li>
          </div>
        </ul>
        <hr className=""></hr>
        <ul className="p-3">
          <div className="flex items-center  hover:bg-blue-200 rounded-lg p-1">
            <img className="w-8 h-8" src={Youtube_library_icon_link} alt="" />
            <li className="p-2 text-center ">Library</li>
          </div>
          <div className="flex  items-center hover:bg-blue-200 rounded-lg p-1">
            <img className="w-8 h-8" src={Youtube_history_icon_link} alt="" />
            <li className="p-2 text-center ">History</li>
          </div>
          <div className="flex  items-center hover:bg-blue-200 rounded-lg p-1">
            <img
              className="w-8 h-8"
              src={Youtube_yourVideos_icon_link}
              alt=""
            />
            <li className="p-2 text-center ">Your Videos</li>
          </div>
          <div className="flex  items-center hover:bg-blue-200 rounded-lg p-1">
            <img
              className="w-8 h-8"
              src={Youtube_watchLater_icon_link}
              alt=""
            />
            <li className="p-2 text-center ">Watch Later</li>
          </div>
          <div className="flex  items-center hover:bg-blue-200 rounded-lg p-1">
            <img
              className="w-8 h-8"
              src={Youtube_likedVideos_icon_link}
              alt=""
            />
            <li className="p-2 text-center ">Liked Videos</li>
          </div>
        </ul>
        <hr className=""></hr>
        <ul className="p-3">
          <div className="flex  items-center hover:bg-blue-200 rounded-lg p-1">
            <img className="w-8 h-8" src={Youtube_musics_icon_link} alt="" />
            <li className="p-2 text-center ">Music</li>
          </div>
          <div className="flex  items-center hover:bg-blue-200 rounded-lg p-1">
            <img className="w-8 h-8" src={Youtube_sports_icon_link} alt="" />
            <li className="p-2 text-center ">Sports</li>
          </div>
          <div className="flex items-center hover:bg-blue-200 rounded-lg p-1">
            <img className="w-8 h-8" src={Youtube_movies_icon_link} alt="" />
            <li className="p-2 text-center ">Movies</li>
          </div>
          <div className="flex  items-center hover:bg-blue-200 rounded-lg p-1">
            <img className="w-8 h-8" src={Youtube_gaming_icon_link} alt="" />
            <li className="p-2 text-center ">Gaming</li>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;

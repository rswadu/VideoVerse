
import React from "react";
function VideoCard({info}) {
    // console.log(info);

const thumbnails=info?.snippet?.thumbnails;
const title=info?.snippet?.title;
const channelTitle=info?.snippet?.channelTitle;

let viewCount=info?.statistics?.viewCount;
{if(viewCount>1000000){
  viewCount=parseInt(viewCount/1000000)+"M";
}
else if(viewCount>1000){
viewCount=parseInt(viewCount/1000)+"k";
}
}
let likeCount=info?.statistics?.likeCount;
{if(likeCount>1000000){
  likeCount=parseInt(likeCount/1000000)+"M";
}
else if(likeCount>1000){
likeCount=parseInt(likeCount/1000)+"k";
}
}
//   console.log(thumbnails);
//   console.log(title);

 

//   console.log(viewCount);

  return <div className="m-2 p-2 w-80 h-80 bg-blue-300 hover:bg-blue-200 hover:shadow-2xl" >
    <img src={thumbnails?.medium?.url} alt="" /> 
    <b>{title}</b>
    <p>{channelTitle}</p>
    <div> 
           <span className="mr-2">{viewCount} views .</span>
           <span>{likeCount} likes</span>
    </div>
  
    </div>;
}
export default VideoCard;

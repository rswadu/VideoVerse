function SearchResultVIdeoCard({info}) {

//     const {thubnails,title,channelTitle}=snippet;
//     const thumbnails=info?.snippet?.thumbnails;
// const title=info?.snippet?.title;
// const channelTitle=info?.snippet?.channelTitle;

const thumbnails=info?.snippet?.thumbnails;
const title=info?.snippet?.title;
const channelTitle=info?.snippet?.channelTitle;
  return (
    <div className="m-2 p-2 w-80 bg-gray-300 hover:bg-gray-200 hover:shadow-2xl" >
    <img src={thumbnails?.medium?.url} alt="" /> 
    <p>{title}</p>
    <p>{channelTitle}</p>
    
    </div>
  )
}
export default SearchResultVIdeoCard
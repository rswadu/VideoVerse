import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useEffect, useState } from "react";
import { Youtube_search_Api } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";
import Body from "./Body";

function Head() {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // console.log(searchQuery);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(Youtube_search_Api + searchQuery);
    const json = await data?.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  //  console.log(suggestions);

  return (
    <>
      <div className="lg:flex justify-between shadow-xl sticky top-0 bg-gray-100   ">
        <div className="flex  p-2 ">
          <img
            onClick={() => {
              handleToggle();
            }}
            className="w-8 h-6 mr-2 cursor-pointer "
            src="data:image/png;base64,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"
            alt=""
          />
          <Link to={"/"}> 
          <img
            className="w-15 h-9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqzZ-Qn2gH2xYRSh5DfUk62azdUyhi6C90Q&usqp=CAU"
            alt=""
          />
          </Link>
        </div>
        <div className="m-1 ">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() =>  
              setTimeout(() => {
                setShowSuggestions(false)
              }, 200)
              }
            // onfocusout={()=>setShowSuggestions(false)}
            className="rounded-l-2xl w-96 h-10 border-l-2 border-y-2 p-2"
          />

          <Link to={"/search?v=" + searchQuery} className=" rounded-r-2xl  border-y-2  h-10 p-2">
            
              <button className="focus:outline-none">
              <img
                className="w-4 h-4 justify-center items-center"
                src="data:image/png;base64,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"
                alt=""
              />
            </button>
             
          </Link>

          {showSuggestions && (
            <div className="fixed bg-gray-100 ">
              <ul>
                {suggestions.map((e) => (
                  <Link
                    to={"/search?v=" + e}
                    onClick={() => {
                      setShowSuggestions(false);
                      setSearchQuery(e);
                    }}
                  >
                    <li className="w-96 bg-gray-100 ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ``  ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` `1  ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` `1` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` `1` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` `1` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` `1` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` `1` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` ` `111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         rounded-lg m-2" key={e}>
                      {e}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <img
            className="w-8 h-8 my-2 mx-5"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </div>
      <Body />
    </>
  );
}
export default Head;

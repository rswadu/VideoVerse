import Sidebar from "./Sidebar";
import Head from "./Head";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
function Body() {
  return (
    <>
   
     <div className="flex m-2 ">
      <Sidebar/>
      <Outlet/>
      
    </div>
    </>
   
  )
}
export default Body;
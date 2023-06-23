import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateString } from "../helper";

function LiveChat() {
    
     const dispatch=useDispatch();
     const chatMessages=useSelector(store=>store.chat.messages);
    //  console.log(chatMessages);
      useEffect(()=>{
       const i= setInterval(() => {
          // console.log("called");
          dispatch(addMessage({
            name:"Noor",
            message:generateString(15),
          }));
        }, 2000);
        return ()=>clearInterval(i);
      },[]);

     const [liveMessage,setLiveMessage]=useState("");
  return (
    <>
    
    <div className=" my-6 p-3  w-full h-[342px] border border-black bg-slate-200 rounded-lg  overflow-y-scroll flex flex-col-reverse ">
       {chatMessages.map((e,index)=>
        <ChatMessage key={index} name={e.name} message={e.message}/>
       )}
        </div>

        <div className="bg-slate-100 border border-black ">
          <input className="w-72 p-1" type="text" value={liveMessage} onChange={(e)=>{
            setLiveMessage(e.target.value);
          }}/> 
         
          <button className="bg-blue-100 w-28 ml-1" onClick={()=>{
            dispatch(addMessage({
              name:"Swadesh",
              message:liveMessage,
            }));
            setLiveMessage("");
          }}>send </button>
        </div>
        </>
  )
}
export default LiveChat
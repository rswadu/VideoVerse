import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT, OFFSET_LIVE_CHAT_COUNT } from "./constants";

const chatSlice=createSlice(
    {
        name:"chat",
        initialState:{
            messages:[]
        },
        reducers:{
            addMessage:(state,action)=>{
                // if(state.messages.length>15){
                //     state.messages.pop();
                // }
                state.messages.splice(OFFSET_LIVE_CHAT_COUNT,1);
                state.messages.unshift(action.payload)
            },
            
        },
    }
);
export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;
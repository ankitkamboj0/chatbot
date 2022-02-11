import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = ()=>{
  const[chats,setChats] = useState([]);
  const fetchChats = async() =>{
    let {data} = await axios.get("/api");
    setChats(data);
  }
  useEffect(()=>{
    fetchChats();
  },[]);

  return(
    <div>
      {chats.map(chat=>(
        <div key={chat.id}>{chat.name}</div>
        ))}
    </div>
  )
}

export default ChatPage;
import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChatRoom.css";

const SidebarChatRoom = () => {
  return (
    <div className="sidebarChatRoom">
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4wtG7xsSn35I9fzbp_83VFD49bFPp0xt_BGPmmejHU3n2Jr2ZJVXeFDcxBqg8r1DJEA&usqp=CAU"/>
      <div className="sidebarChatRoom__room">
        <h2>Room Name</h2>
        <p>Your Last chat ....</p>
      </div>
    </div>
  );
};

export default SidebarChatRoom;

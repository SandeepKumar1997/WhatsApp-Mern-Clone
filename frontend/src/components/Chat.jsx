import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Avatar, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import React from "react";
import "./Chat.css";
import MoreVert from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";

const Chat = () => {
  return (
    <div className="chat">
      <div className="headerChat">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__Body">
        <p className="chat__message">
          <span className="chat__name">Sandeep</span>
          This is a message
          <span className="chat__timestamp">{new Date().toLocaleString()}</span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">Sandeep</span>
          This is a message
          <span className="chat__timestamp">{new Date().toLocaleString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input type="text" placeholder="Enter your message .." />
          <button type="submit">Send</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;

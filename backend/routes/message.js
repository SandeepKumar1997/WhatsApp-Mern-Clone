const express = require("express");
const messageRouter = express.Router();
const { newMessage, getMessages } = require("../controllers/messageController");
messageRouter.post("/message/new", newMessage);
messageRouter.get("/message/get", getMessages);

module.exports = messageRouter;

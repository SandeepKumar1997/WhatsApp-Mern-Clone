const Message = require("../models/messageSchema");

const newMessage = async (req, res, next) => {
  const { name, message, receiver } = req.body;
  try {
    const messages = await Message.create({
      name,
      message,
      receiver,
    });
    return res.status(201).json(messages);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({});
    f;
    return res.status(201).json(messages);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

module.exports = {
  newMessage,
  getMessages,
};

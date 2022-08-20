const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongo = require("./config/mongo");
const Pusher = require("pusher");
const messageRouter = require("./routes/message");
const mongoose = require("mongoose");
app.use(express.json());

const pusher = new Pusher({
  appId: "1463227",
  key: "8df49a01219c8a00100c",
  secret: "a0dd7101ff01dae4d4f2",
  cluster: "us2",
  useTLS: true,
});

dotenv.config({ path: "./config/config.env" });
mongo();

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB connected");
  const msgCollection = db.collection("messagecontents");
  const stream = msgCollection.watch();
  stream.on("change", (item) => {
    console.log(item);
  });
});

const PORT = process.env.PORT;
app.use("/api", messageRouter);
app.listen(PORT, () => {
  console.log(`Listeining at port ${PORT}`);
});

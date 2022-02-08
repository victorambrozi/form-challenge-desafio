const express = require("express");
const server = express();

server.use(express.static("public"));

server.get("/", (req, res) => res.sendFile(__dirname + "./index.html"));

server.listen(5000, () => {
  console.log("server is ruining");
});

require("dotenv").config();
//server.js
const express = require("express");
//const favicon = require('express-favicon');
const port = process.env.PORT || 8080;
const app = express();

app.get("/", function (req, res) {
  return res.send("hello brotha!");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log(`Listening at ${port}`);
});

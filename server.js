require("dotenv").config();
//server.js
const express = require("express");
//const favicon = require('express-favicon');
const port = process.env.PORT || 8080;
const app = express();

app.get("/", function (req, res) {

  console.log('got a req', req)

  return res.send("yaharu!");
});

app.get("/bato", function (req, res) {

  console.log('got a req', req)

  return res.send("yaharu! from /bato");
});

app.get("/bato/super-nested", function (req, res) {

  console.log('got a req', req)

  return res.send(req.params);
});

app.get("/bato/super-nested/:some", function (req, res) {

  console.log('got a req', req)

  return res.send(req.params);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log(`Listening at ${port}`);
});

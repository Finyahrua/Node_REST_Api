const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.status(200).json({
    message: "It now works as it did previously!",
  });
});

module.exports = app;
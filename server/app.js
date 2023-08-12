const express = require("express");

const router = require("./routes");

const app = express();

app.set("port", 5000);

app.use("/api/v1", router);

module.exports = app;

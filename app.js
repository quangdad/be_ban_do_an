const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: false, limit: "30mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/api", indexRouter);

module.exports = app;

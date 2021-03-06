require('dotenv').config();
const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
var dbConnectionFunction = require('./dbConnection');

const routes = require("./api");

const { Response } = require("./middlewares");

const app = express();

// establishing database connection
dbConnectionFunction();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(Response.middleware);

app.get("/", async (req, res, next) => {
  res.dispatch.OK("Server is alive!");
});
app.use("/users", routes.userRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

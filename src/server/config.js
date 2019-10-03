import path from "path";

import morgan from "morgan";
import express from "express";

import  bodyParser from 'body-parser';

//Routes API
import routes from "../routes/API_HANOVER";

// init Serial
import { mySerial } from './serialConnection';

module.exports = app => {
  //Settings
  app.set("port", process.env.PORT || 3000);

  //middlewares
  app.use(morgan("dev"));

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(bodyParser.urlencoded({extended: false}));

  // routes
  routes(app);

  // static files
  app.use("/public", express.static(path.join(__dirname, "../public")));


  return app;
};

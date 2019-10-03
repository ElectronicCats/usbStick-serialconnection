const path = require("path");

const chalk = require("chalk");
const log = console.log;

const morgan = require("morgan");
const express = require("express");

const SerialPort = require("serialport");

const bodyParser = require('body-parser');

//Routes API
const routes = require("../routes/API_HANOVER");

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

  //Connection to serial port
  const ReadLine = SerialPort.parsers.Readline;
  const parser = new ReadLine();

  const mySerial = new SerialPort("COM20", {
    baudRate: 115200
  });

  mySerial.write('hello from node\n', (err) => {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });

  mySerial.on("open", () => {
    log(chalk.green("Opened Serial Port!"));
  });

  //* listen data
  mySerial.on("data", data => {
    //let getData = data.toString();
  });

  //! ERROR
  mySerial.on("err", err => {
    log(chalk.red(err.message));
  });

  return app;
};

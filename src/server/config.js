const path = require("path");

const chalk = require('chalk');
const log = console.log;

const morgan = require("morgan");
const express = require("express");

const SerialPort = require("serialport");

module.exports = app => {
  //Settings
  app.set("port", process.env.PORT || 3000);

  //middlewares
  app.use(morgan("dev"));

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // static files
  app.use("/public", express.static(path.join(__dirname, "../public")));

  //Connection to serial port
  const ReadLine = SerialPort.parsers.Readline;
  const parser = new ReadLine();

  const mySerial = new SerialPort("COM15", {
    baudRate: 9600
  });

  
  mySerial.on("open", () => {
    log(chalk.green("Opened Serial Port!"));
  });

  //* listen data
  mySerial.on("data", data => {
    log(chalk.green(data.toString()));
  });

  //! ERROR
  mySerial.on('err', (err)=>{
    log(chalk.red(err.message));
  })

  return app;
};

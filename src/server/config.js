const path = require("path");

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
    console.log("Opened Serial Port!");
  });

  //
  mySerial.on("data", data => {
    console.log(data.toString());
  });

  mySerial.on('err', (err)=>{
    console.log(err.message);
  })

  return app;
};

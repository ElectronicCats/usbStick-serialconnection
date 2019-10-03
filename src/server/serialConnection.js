const chalk = require("chalk");
const log = console.log;

const SerialPort = require("serialport");
//Connection to serial port

const ReadLine = SerialPort.parsers.Readline;
const parser = new ReadLine();

export const mySerial = new SerialPort("COM20", {
  baudRate: 115200
});

mySerial.write("hello from node\n", err => {
  if (err) {
    return console.log("Error on write: ", err.message);
  }
  console.log("message written");
});

mySerial.on("open", () => {
  log(chalk.green("Opened Serial Port!"));
});

//* listen data
mySerial.on("data", data => {
  //let getData = data.toString();
});

//! on ERROR
mySerial.on("err", err => {
  log(chalk.red(err.message));
});

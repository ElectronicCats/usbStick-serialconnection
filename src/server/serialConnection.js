import chalk from "chalk";
const log = console.log;

import SerialPort from "serialport";
//Connection to serial port
import { Controller } from "../controllers/API";

const parsers = SerialPort.parsers;

SerialPort.list(function (err, ports) {
  ports.forEach(function(port) {
      log(chalk.green(port.comName));
  });
});

export const mySerial = new SerialPort("COM20", {
  baudRate: 115200
});

const parser = new parsers.Readline({
  delimiter: '\r\n'
});

mySerial.pipe(parser);

/**
 * @ON_CONNECT
 */
parser.on("open", () => {
  log(chalk.green("Opened Serial Port!"));
});

//* listen data LoRa
parser.on('data', function(data){
  let data_resive = data.toString();
  log(chalk.red(data_resive));
  if (data_resive != null) {
    if (data_resive === "100") Controller.postData_onLedCatRelay(); //Foco
    if (data_resive === "000") Controller.postData_offLedCatRelay(); //Foco
    if (data_resive === "010") Controller.postData_closeGripper(); //CLose
    if (data_resive === "001") Controller.postData_openGripper(); //Open
    if (data_resive === "110") Controller.postData_closeGripperAndLedOn(); //Close and Foco
    if (data_resive === "101") Controller.postData_openGripperAndLedOn(); //Open and Foco
  } else {
    console.log("data is undifined");
  }
});

//! on ERROR
parser.on("err", err => {
  log(chalk.red(err.message));
});

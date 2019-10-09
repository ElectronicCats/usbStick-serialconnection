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


mySerial.write('111');
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
    if (data_resive === "0000") Controller.getSerial_offCatrelay(); //Off
    if (data_resive === "1000") Controller.getSerial_onCatrelay(); //Om
    if (data_resive === "1001") Controller.getSerial_onLedCatRelay(); //Foco
    if (data_resive === "1010") Controller.getSerial_closeGripper(); //CLose
    if (data_resive === "1100") Controller.getSerial_openGripper(); //Open
    if (data_resive === "1011") Controller.getSerial_closeGripperAndLedOn(); //Close and Foco
    if (data_resive === "1101") Controller.getSerial_openGripperAndLedOn(); //Open and Foco
  } else {
    console.log("data is undifined");
  }
});

//! on ERROR
parser.on("err", err => {
  log(chalk.red(err.message));
});

import chalk from "chalk";
const log = console.log;

import SerialPort from "serialport";
//Connection to serial port

const ReadLine = SerialPort.parsers.Readline;
const parser = new ReadLine();

import { Controller } from "../controllers/API";

export const mySerial = new SerialPort("COM20", {
  baudRate: 115200
});

/**
 *  @TEST_SEND_DATA_LoRa
 */
mySerial.write("hello from node\n", err => {
  if (err) {
    return console.log("Error on write: ", err.message);
  }
  console.log("message written");
});

/**
 * @ON_CONNECT
 */
mySerial.on("open", () => {
  log(chalk.green("Opened Serial Port!"));
});

//* listen data LoRa
mySerial.on("data", GET_DATA => {
  let data = GET_DATA.toString();
  console.log("GET|DATA: " + GET_DATA);
  if (data != null) {
    if (data === "0000") Controller.getSerial_offCatrelay(); //Off
    if (data === "1000") Controller.getSerial_onCatrelay(); //Om
    if (data === "1001") Controller.getSerial_onLedCatRelay(); //Foco
    if (data === "1010") Controller.getSerial_closeGripper(); //CLose
    if (data === "1100") Controller.getSerial_openGripper(); //Open
    if (data === "1011") Controller.getSerial_closeGripperAndLedOn(); //Close and Foco
    if (data === "1101") Controller.getSerial_openGripperAndLedOn(); //Open and Foco
  } else {
    console.log("data is undifined");
  }
});

//! on ERROR
mySerial.on("err", err => {
  log(chalk.red(err.message));
});

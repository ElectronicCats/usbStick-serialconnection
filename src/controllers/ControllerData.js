import { mySerial } from "../server/serialConnection";
import { Controller } from "./API";
const Buffer = require("safe-buffer").Buffer;

import { postData } from "./helpers";
function ControllerData(config) {}

ControllerData.prototype.onLedCatRelay = () => {
  console.log("ON LED");

  mySerial.write("100", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });
  postData(1, 0, 0);
};

ControllerData.prototype.offLedCatRelay = () => {
  console.log("OFF LED");
  mySerial.write("000", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });

  postData(0, 0, 0);
};

ControllerData.prototype.closeGripper = () => {
  console.log("CLOSE GRIPPER");
  mySerial.write("010", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });

  postData(0, 1, 0);
};

ControllerData.prototype.openGripper = () => {
  console.log("OPEN GRIPPER");
  mySerial.write("001", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });

  postData(0, 0, 1);
};

ControllerData.prototype.closeGripperAndLedOn = () => {
  console.log("CLOSE GRIPPER AND ON LED");
  mySerial.write("110", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });

  postData(1, 1, 0);
};

ControllerData.prototype.openGripperAndLedOn = () => {
  console.log("OPEN GRIPPER AND ON LED");
  mySerial.write("101", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });

  postData(1, 0, 1);
};

ControllerData.prototype.postData_onLedCatRelay = () => {
  console.log("ON LED -> POST");
  postData(1,0,0);
};
ControllerData.prototype.postData_offLedCatRelay = () => {
  console.log("OFF LED -> POST");
  postData(0,0,0);  
};
ControllerData.prototype.postData_closeGripper = () => {
  console.log("CLOSE GRIPPER -> POST");
  postData(0,1,0);
};
ControllerData.prototype.postData_openGripper = () => {
  console.log("OPEN GRIPPER -> POST");
  postData(0,0,1);
};
ControllerData.prototype.postData_openGripperAndLedOn = () => {
  console.log("OPEN GRIPPER  AND ON LED-> POST");
  postData(1,0,1);
};
ControllerData.prototype.postData_closeGripperAndLedOn = () => {
  console.log("CLOSE GRIPPER  AND ON LED-> POST");
  postData(1,1,0);
};

module.exports = ControllerData;

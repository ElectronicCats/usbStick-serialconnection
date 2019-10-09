import { mySerial } from "../server/serialConnection";
import axios from "axios";
const Buffer = require("safe-buffer").Buffer;

function ControllerData(config) {}

ControllerData.prototype.offCatRelay = () => {
  console.log("OFF CAT RELAY");
  mySerial.write({ data: "0000" });
};

ControllerData.prototype.onCatRelay = () => {
  console.log("ON CAT RELAY");
  mySerial.write("1000", err => {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
  });
};

ControllerData.prototype.onLedCatRelay = () => {
  mySerial.push("1001", err => {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("ON LED CAT RELAY");
    console.log("message written");
  });
};

ControllerData.prototype.closeGripper = () => {
  console.log("CLOSE GRIPPER");
  mySerial.write("1010", err => {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
  });
};

ControllerData.prototype.openGripper = () => {
  console.log("OPEN GRIPPER");
  mySerial.write("1100", err => {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
  });
};

ControllerData.prototype.closeGripperAndLedOn = () => {
  console.log("CLOSE GRIPPER AND ON LED");
  mySerial.push("1011", err => {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
  });
};

ControllerData.prototype.openGripperAndLedOn = () => {
  console.log("OPEN GRIPPER AND ON LED");

  const largeMessage = Buffer.from(1024 * 10).fill("!");
  mySerial.write(largeMessage, () => {
    console.log("Write callback returned");

    // At this point, data may still be buffered and not sent out over the port yet
    // write function returns asynchronously even on the system level.
    console.log("Calling drain");
    mySerial.drain(() => {
      console.log("Drain callback returned");
      // Now the data has "left the pipe" (tcdrain[1]/FlushFileBuffers[2] finished blocking).
      // [1] http://linux.die.net/man/3/tcdrain
      // [2] http://msdn.microsoft.com/en-us/library/windows/desktop/aa364439(v=vs.85).aportx
    });
  });
};

/**@GET_DATA_CONTROLLER */
ControllerData.prototype.getSerial_offCatrelay = data => {
  console.log("/**GET DATA - OFF CAT RELAY");
  //axios send data
};

ControllerData.prototype.getSerial_onCatrelay = data => {
  console.log("/**GET DATA - ON CAT RELAY");
  //axios send data
};

ControllerData.prototype.getSerial_onLedCatRelay = data => {
  console.log("/**GET DATA - ON LED CAT RELAY");
  //axios send data
};

ControllerData.prototype.getSerial_closeGripper = data => {
  console.log("/**GET DATA - CLOSE GRIPPER");
  //axios send data
};

ControllerData.prototype.getSerial_openGripper = data => {
  console.log("/**GET DATA - OPEN GRIPPER");
  //axios send data
  mySerial.write("Hola Culo");
};

ControllerData.prototype.getSerial_closeGripperAndLedOn = data => {
  console.log("/**GET DATA - CLOSE GRIPPER AND LED ON");
  //axios send data
  mySerial.write("1101\n", err => {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
  });
};

ControllerData.prototype.getSerial_openGripperAndLedOn = data => {
  console.log("/**GET DATA - OPEN GRIPPER AND LED ON");
  //axios send data

  mySerial.write("Hola");
};

module.exports = ControllerData;

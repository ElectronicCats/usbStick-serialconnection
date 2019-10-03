import { mySerial } from '../server/serialConnection';

function ControllerData(config) {}

ControllerData.prototype.offCatRelay = () => {
  console.log("OFF CAT RELAY");
  mySerial.write("0000", err => {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
  });
}

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
  console.log("ON LED CAT RELAY");
  mySerial.write("1001", err => {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
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
  mySerial.write("1011", err => {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
  });
};

ControllerData.prototype.openGripperAndLedOn = () => {
  console.log("OPEN GRIPPER AND ON LED");
  mySerial.write("1101", err => {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
  });
};

module.exports = ControllerData;

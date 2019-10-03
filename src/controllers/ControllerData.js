function ControllerData(config) {}

ControllerData.prototype.offCatRelay = () => {
  console.log("OFF CAT RELAY");
};

ControllerData.prototype.onCatRelay = () => {
  console.log("ON CAT RELAY");
};

ControllerData.prototype.onLedCatRelay = () => {
  console.log("ON LED CAT RELAY");
};

ControllerData.prototype.closeGripper = () => {
  console.log("CLOSE GRIPPER");
};

ControllerData.prototype.openGripper = () => {
  console.log("OPEN GRIPPER");
};

ControllerData.prototype.closeGripperAndLedOn = () => {
  console.log("CLOSE GRIPPER AND ON LED");
};

ControllerData.prototype.openGripperAndLedOn = () => {
  console.log("OPEN GRIPPER AND ON LED");
};

module.exports = ControllerData;

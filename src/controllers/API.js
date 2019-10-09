const ControllerData = require("./ControllerData");

const ctrl = {};
export const Controller = new ControllerData();

ctrl.index = (req, res) => {
  console.log("init API");
};

ctrl.execute = (req, res) => {
  let state = {
    data: req.body.data
  };

  switch (state.data) {
    case "000":
      Controller.offLedCatRelay();
      break;
    case "100":
      Controller.onLedCatRelay();
      break;
    case "010":
      Controller.closeGripper();
      break;
    case "001":
      Controller.openGripper();
      break;
    case "110":
      Controller.closeGripperAndLedOn();
      break;
    case "101":
      Controller.openGripperAndLedOn();
      break;
    default:
      console.log("Data is not defined 404!");
      break;
  }

  res.send(state);
};

module.exports = ctrl;

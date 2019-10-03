const ControllerData = require('./ControllerData');

const ctrl = {};
const Controller = new ControllerData();

ctrl.index = (req, res) => {
  console.log("init API");
};

ctrl.execute = (req, res) => {
  let state = {
    data: req.body.data
  };

  switch (state.data) {
    case "0000":
        Controller.offCatRelay();
      break;
    case "1000":
        Controller.onCatRelay();
      break;
    case "1001":
        Controller.onLedCatRelay();
      break;
    case "1010":
        Controller.closeGripper();
      break;
    case "1100":
        Controller.openGripper();
      break;
    case "1011":
        Controller.closeGripperAndLedOn();
      break;
    case "1101":
        Controller.openGripperAndLedOn();
      break;
    default:
        console.log("Data is not defined 404!");
      break;
  }

  res.send(state);
};

module.exports = ctrl;

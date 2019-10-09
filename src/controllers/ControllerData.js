import { mySerial } from "../server/serialConnection";
import axios from "axios";
const Buffer = require("safe-buffer").Buffer;

function ControllerData(config) {}

ControllerData.prototype.onLedCatRelay = () => {
  console.log("ON LED");

  mySerial.write("100", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });

  //axios send data
  axios
    .post("http://striverq.borealixsec.com/api/CapturaSPC/RegParams", {
      FormStructureId: "5d97c6de4e976399ece4ae6d",
      ReferenceParameters: [
        { Name: "Foco Encendido", Value: 1 },
        { Name: "Pinza Abierta", Value: 0 },
        { Name: "Pinza Cerrada", Value: 0 }
      ]
    })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

ControllerData.prototype.offLedCatRelay = () => {
  console.log("OFF LED");
  mySerial.write("000", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });

  //axios send data
  axios
    .post("http://striverq.borealixsec.com/api/CapturaSPC/RegParams", {
      FormStructureId: "5d97c6de4e976399ece4ae6d",
      ReferenceParameters: [
        { Name: "Foco Encendido", Value: 0 },
        { Name: "Pinza Abierta", Value: 0 },
        { Name: "Pinza Cerrada", Value: 0 }
      ]
    })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

ControllerData.prototype.closeGripper = () => {
  console.log("CLOSE GRIPPER");
  mySerial.write("010", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });

  //axios send data
  axios
    .post("http://striverq.borealixsec.com/api/CapturaSPC/RegParams", {
      FormStructureId: "5d97c6de4e976399ece4ae6d",
      ReferenceParameters: [
        { Name: "Foco Encendido", Value: 0 },
        { Name: "Pinza Abierta", Value: 1 },
        { Name: "Pinza Cerrada", Value: 0 }
      ]
    })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

ControllerData.prototype.openGripper = () => {
  console.log("OPEN GRIPPER");
  mySerial.write("001", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });

  //axios send data
  axios
    .post("http://striverq.borealixsec.com/api/CapturaSPC/RegParams", {
      FormStructureId: "5d97c6de4e976399ece4ae6d",
      ReferenceParameters: [
        { Name: "Foco Encendido", Value: 0 },
        { Name: "Pinza Abierta", Value: 0 },
        { Name: "Pinza Cerrada", Value: 1 }
      ]
    })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

ControllerData.prototype.closeGripperAndLedOn = () => {
  console.log("CLOSE GRIPPER AND ON LED");
  mySerial.write("110", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });

  //axios send data
  axios
    .post("http://striverq.borealixsec.com/api/CapturaSPC/RegParams", {
      FormStructureId: "5d97c6de4e976399ece4ae6d",
      ReferenceParameters: [
        { Name: "Foco Encendido", Value: 1 },
        { Name: "Pinza Abierta", Value: 1 },
        { Name: "Pinza Cerrada", Value: 0 }
      ]
    })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

ControllerData.prototype.openGripperAndLedOn = () => {
  console.log("OPEN GRIPPER AND ON LED");
  mySerial.write("101", err => {
    if (err) return console.log("Error on write: ", err.message);
    console.log("message written");
  });

  //axios send data
  axios
    .post("http://striverq.borealixsec.com/api/CapturaSPC/RegParams", {
      FormStructureId: "5d97c6de4e976399ece4ae6d",
      ReferenceParameters: [
        { Name: "Foco Encendido", Value: 1 },
        { Name: "Pinza Abierta", Value: 0 },
        { Name: "Pinza Cerrada", Value: 1 }
      ]
    })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

module.exports = ControllerData;

const express = require("express");

const chalk = require("chalk");
const log = console.log;

const config = require("./src/server/config");

const app = config(express());

// Start srv
app.listen(app.get("port"), () => {
  log(chalk.black.bgYellow.bold("Server run in port: ", app.get("port")));
});

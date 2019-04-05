"use strict";

const signup = require("./signup");
const question = require("./question")
const { COMMAND_PREFIX } = process.env;

const messages = [];

messages["default"] = "Comando inváldo!";

messages[`${COMMAND_PREFIX}ping`] = ({ client }) =>
  `Pong! Latência | ${client.ping}ms`;

messages[`${COMMAND_PREFIX}twitter`] = () =>
  "https://twitter.com/collabcodetech";

messages[`${COMMAND_PREFIX}apresentar`] = ({ msg }) => signup(msg);

messages[`${COMMAND_PREFIX}question`] = ({ msg }) => question(msg);

module.exports = messages;

"use strict";

const { COMMAND_PREFIX } = process.env;
const { commands } = require("../../constants");
const DirectMessage = require("../DirectMessage/index.js");
const messages = [];


messages["default"] = "Comando inválido!";
commands.forEach((value) => {
  messages[`${COMMAND_PREFIX}${value.command}`] = (client, msg) => {
    if (value.showAllCommands) {
      return commands.map((a, index) => (
        index ? `${COMMAND_PREFIX}${a.command}` : `
${COMMAND_PREFIX}${a.command}`
      ));
    }
    return eval("`" + value.response + "`");
  }
});

module.exports = messages;

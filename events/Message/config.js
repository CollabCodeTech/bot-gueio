"use strict";

const { COMMAND_PREFIX } = process.env;
const { commands } = require('../../constants');
const messages = [];

messages["default"] = "Comando inválido!";
commands.forEach((value) => {
  messages[`${COMMAND_PREFIX}${value.command}`] = client => {
    if (value.showAllCommands) {
      return commands.map(a => COMMAND_PREFIX + a.command);
    }
    return eval('`' + value.response + '`');
  }
});

module.exports = messages;

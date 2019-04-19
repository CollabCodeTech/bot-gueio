"use strict";

const messages = require("./config");

const response = (msg, client) => {
  messages[msg.content] && msg.content.match(/^\!/)
    ? msg.reply(messages[msg.content](client, msg))
    : msg.content.match(/^\!/) && msg.reply(messages["default"]);
};

module.exports = {
  response
};

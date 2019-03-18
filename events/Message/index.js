"use strict";

const { COMMAND_PREFIX } = process.env;

const ping = (msg, client) => {
  if (msg.content === `${COMMAND_PREFIX}ping`)
    msg.reply(`Pong! Latência | ${client.ping}ms`);
};

module.exports = {
  ping
};

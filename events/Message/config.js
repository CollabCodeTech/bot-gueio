const { COMMAND_PREFIX } = process.env;
const messages = [];

messages["default"] = "Comando inváldo!";

messages[`${COMMAND_PREFIX}ping`] = client =>
  `Pong! Latência | ${client.ping}ms`;

messages[`${COMMAND_PREFIX}twitter`] = () =>
  "https://twitter.com/collabcodetech";

module.exports = messages;

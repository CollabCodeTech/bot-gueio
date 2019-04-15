"use strict";

const { COMMAND_PREFIX } = process.env;
const messages = [];

messages["default"] = "Comando inváldo!";

messages[`${COMMAND_PREFIX}ping`] = client =>
  `Pong! Latência | ${client.ping}ms`;

messages[`${COMMAND_PREFIX}twitter`] = () =>
  "https://twitter.com/collabcodetech";

messages[`${COMMAND_PREFIX}twitch`] = () => "http://twitch.tv/marcobrunobr";

messages[`${COMMAND_PREFIX}youtube`] = () => "https://www.youtube.com/collabcode";

messages[`${COMMAND_PREFIX}curso`] = () => `Para saber mais sobre o curso como, **ementa**, **próxima turma** ou qualquer outra parada, entre no site:
http://dofrontaoend.collabcode.training`;

messages[`${COMMAND_PREFIX}facebook`] = () => "https://www.facebook.com/collabcode";

messages[`${COMMAND_PREFIX}comandos`] = () => `
!ping
!twitch
!twitter
!youtube
!curso
!facebook
!comandos
`

module.exports = messages;

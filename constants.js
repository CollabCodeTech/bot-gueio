const commands = [
  {
    command: "curso",
    response:
      "Curso online Do Front ao End está com as vagas esgotadas. Para receber novidades e ver a ementa entre no site: https://dofrontaoend.collabcode.training"
  },
  {
    command: "ping",
    response: "Pong! Latência | ${client.ping} msg"
  },
  {
    command: "twitter",
    response: "https://twitter.com/collabcodetech"
  },
  {
    command: "twitch",
    response: "http://twitch.tv/marcobrunobr"
  },
  {
    command: "youtube",
    response: "https://www.youtube.com/collabcode"
  },
  {
    command: "facebook",
    response: "https://www.facebook.com/collabcode"
  },
  {
    command: "comandos",
    showAllCommands: true
  }
];

module.exports = {
  commands: commands
};

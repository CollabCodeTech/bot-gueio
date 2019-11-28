const commands = [
  {
    command: "curso",
    response:
      "Se inscreva na **Semana Do Front ao End** para receber o **eBook** e **layout do jogo** que faremos no mini-curos **ao vivo** e de **graça** de HTML, CSS e JavaScript nos dias **9, 10, 11, 12 e 13 de Dezembro**. Para se inscrever só entrar no site: https://dofrontaoend.collabcode.training/"
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

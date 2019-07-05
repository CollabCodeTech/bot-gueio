const commands = [
  {
    command: "curso",
    response:
      "Inscrição para **Semana Do Front ao End** abertas (15/07 até 22/07 às 19:32 horário de Brasília), essa é uma oportunidade free e ao vivo para você conhecer o curso, faça seu cadastro: http://dofrontaoend.collabcode.training"
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

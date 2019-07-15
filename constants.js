const commands = [
  {
    command: "curso",
    response:
      "Pré-inscrição para a **Turma Do Front ao End** abertas, vagas limitas a 120 pessoas, faça sua pré-inscrição agora que no dia **19/07** envio um email para efetuar sua inscrição: http://dofrontaoend.collabcode.training"
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

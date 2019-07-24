const commands = [
  {
    command: "curso",
    response:
      "Inscrições para a **Turma Do Front ao End** abertas, vagas limitadas para 120 pessoas, faça sua inscrição até dia **29/07** ou enquanto durarem as vagas: https://dofrontaoend.collabcode.training/investimento"
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

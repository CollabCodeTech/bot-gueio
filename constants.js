const commands = [{
    "command": "cadastro",
    "response": "Bora se cadastrar!!!"
},
{
    "command": "curso",
    "response": "Para saber mais sobre o curso como, **ementa**, **próxima turma** ou qualquer outra parada, entre no site: http://dofrontaoend.collabcode.training"
},
{
    "command": "ping",
    "response": "Pong! Latência | ${client.ping} msg"
}, 
{
    "command": "twitter",
    "response": "https://twitter.com/collabcodetech"
}, 
{
    "command": "twitch",
    "response": "http://twitch.tv/marcobrunobr"
},
{
    "command": "youtube",
    "response": "https://www.youtube.com/collabcode"
},
{
    "command": "facebook",
    "response": "https://www.facebook.com/collabcode"
},
{
    "command": "comandos",
    "showAllCommands": true
}]

module.exports = {
    commands: commands
}

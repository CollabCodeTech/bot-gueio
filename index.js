require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const { TOKEN } = process.env;

require("./events")(client);

client.login(TOKEN);

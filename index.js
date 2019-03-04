require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const { TOKEN } = process.env;

client.on("ready", () => console.log(`Logged in as ${client.user.tag}`));

require("./events/index")(client);

client.login(TOKEN);

// ############################################################
//                        REQUIRES
// ############################################################

require("dotenv").config();
const Discord   = require("discord.js");
const gueio     = new Discord.Client();
const { TOKEN } = process.env;

// _____________________________________________________________


// #############################################################
//                       INICIANDO BOT
// #############################################################

gueio.on("ready", () => {
  console.log(`Logged in as ${gueio.user.tag}`);
});
// _____________________________________________________________

// #############################################################
//                           COMANDOS
// #############################################################

gueio.on("message", msg => {
  if (msg.content === "!ping") msg.reply(`Pong! Latência | ${gueio.ping}ms`);
});

// _____________________________________________________________


gueio.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(
    channel => channel.name === "💨boas-vindas💨"
  );

  if (!channel) return;

  channel.send(`
╚════════════════
Boas vinda ao servidor da CollabCode, ${member}. 
Por favor, entre nos dois canais a seguir antes de se divertir e trocar conhecimento com a galera!
<#547539568006660096>
<#547635393655210004>
╔════════════════
`);
  member.addRole("545502061601751040");
});

gueio.login(TOKEN);

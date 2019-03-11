require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const { TOKEN, WELCOME_CHANNEL, ENTER_CHANNEL } = process.env;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

require("./events")(client);

client.on("messageReactionAdd", (msg, user) => {
  if (
    msg.message.channel.name === EN &&
    msg.emoji.id === "554458703034712080"
  ) {
    msg.message.member.addRole("554409793859747873");
  }
});

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(
    channel => channel.name === CHANNEL_WELCOME
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

client.login(TOKEN);

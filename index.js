require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const { TOKEN, ENTER_CHANNEL } = process.env;

require("./events")(client);

client.on("messageReactionAdd", (msg, user) => {
  if (
    msg.message.channel.name === ENTER_CHANNEL &&
    msg.emoji.id === "554458703034712080"
  ) {
    msg.message.member.addRole("554409793859747873");
  }
});

client.login(TOKEN);

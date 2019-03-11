const Discord = require("discord.js");
const guild = new Discord.Guild();
const { ENTER_CHANNEL } = process.env;
const category = require("./config")[0];

const enterChannel = (reaction, user, client) => {
  if (reaction.message.channel.name === ENTER_CHANNEL) {
    if (reaction.emoji.name === category.emoji.name) {
      const member = reaction.emoji.guild.members.get(user.id);
      member.addRole(category.role.id);
    }
  }
};

module.exports = {
  enterChannel
};

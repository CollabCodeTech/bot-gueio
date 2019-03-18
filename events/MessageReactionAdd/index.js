const Discord = require("discord.js");
const guild = new Discord.Guild();
const { ENTER_CHANNEL } = process.env;
const categories = require("./config");

const enterChannel = (reaction, user, client) => {
  if (reaction.message.channel.name === ENTER_CHANNEL) {
    console.log("Name emoji", reaction.emoji.name);
    const category = categories[reaction.emoji.name];
    console.log("Valor do category", category);

    if (category) {
      const member = reaction.emoji.guild.members.get(user.id);
      member.addRole(category.role.id);
    }
  }
};

module.exports = {
  enterChannel
};

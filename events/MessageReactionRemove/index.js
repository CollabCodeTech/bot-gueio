"use strict";

const { ENTER_CHANNEL } = process.env;
const categories = require("./config");

const quitChannel = (reaction, user) => {
  if (reaction.message.channel.name === ENTER_CHANNEL) {
    const category = categories[reaction.emoji.name];

    if (category) {
      const member = reaction.emoji.guild.members.get(user.id);
      member.removeRole(category.role.id);
    }
  }
};

module.exports = {
  quitChannel
};

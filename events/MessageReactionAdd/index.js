"use strict";

const { ENTER_CHANNEL } = process.env;
const categories = require("./config");

const enterChannel = (event, client) => {
  const { d: data } = event;

  const user = client.users.get(data.user_id);
  const channel = client.channels.get(data.channel_id);
  const guild = client.guilds.get(data.guild_id);

  if (channel.id === ENTER_CHANNEL) {
    const category = categories[data.emoji.name];

    if (category) {
      const member = guild.members.get(user.id);
      member.addRole(category.role.id);
    }
  }
};

module.exports = {
  enterChannel
};

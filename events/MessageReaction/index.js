const emojis = require("./config");

const addRolesByAddEmoji = (event, client) => {
  try {
    const { d: data } = event;
    const emoji = emojis[data.emoji.name];

    const user = client.users.get(data.user_id);
    const channel = client.channels.get(data.channel_id);
    const guild = client.guilds.get(data.guild_id);

    if (emoji.channels.includes(channel.name)) {
      const member = guild.members.get(user.id);
      const role = guild.roles.find((role) => role.name === emoji.role.name);

      member.addRole(role.id);
    }
  } catch(error) {
    return false;
  }
};

const removeRolesByRemoveEmoji = (event, client) => {
  try {
    const { d: data } = event;
    const emoji = emojis[data.emoji.name];

    const user = client.users.get(data.user_id);
    const channel = client.channels.get(data.channel_id);
    const guild = client.guilds.get(data.guild_id);

    if (emoji.channels.includes(channel.name)) {
      const member = guild.members.get(user.id);
      const role = guild.roles.find((role) => role.name === emoji.role.name);

      member.removeRole(role.id);
    } 
  } catch(error) {
    return false;
  }
};


module.exports = {
  addRolesByAddEmoji, removeRolesByRemoveEmoji
};

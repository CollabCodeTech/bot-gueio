const commands = require("./commands");

class GuildMemberAdd {
  hello(member, client) {
    const cmds = commands(member);
    const { ROLES_VIEWERS, CHANNEL_HELLO } = process.env;
    const channel = member.guild.channels.find(
      channel => channel.id === CHANNEL_HELLO
    );

    console.log(member.guild.channels);

    if (!channel) return;

    channel.send(cmds["hello"]);
    member.addRole(ROLES_VIEWERS);
  }
}

module.exports = new GuildMemberAdd();

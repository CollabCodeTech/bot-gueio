const Message = require("./Message/index");
const GuildMemberAdd = require("./GuildMemberAdd/index");

module.exports = client => {
  client.on("message", msg => Message.commands(msg, client));

  client.on("guildMemberAdd", member => GuildMemberAdd.hello(member, client));
};

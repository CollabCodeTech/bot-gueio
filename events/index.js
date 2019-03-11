const Ready = require("./Ready");
const GuildMemberAdd = require("./GuildMemberAdd");
const Message = require("./Message");
const MessageReactionAdd = require("./MessageReactionAdd");

module.exports = client => {
  client.on("ready", () => Ready.init(client));
  client.on("guildMemberAdd", member => GuildMemberAdd.welcome(member));
  client.on("message", msg => Message.ping(msg, client));
  client.on("messageReactionAdd", (msg, user) =>
    MessageReactionAdd.enterChannel(msg, user, client)
  );
};

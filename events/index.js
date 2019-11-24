const Ready = require("./Ready");
const GuildMemberAdd = require("./GuildMemberAdd");
const Message = require("./Message");
const MessageReaction = require("./MessageReaction");


module.exports = client => {
  client.on("ready", () => Ready.init(client));
  client.on("guildMemberAdd", member => GuildMemberAdd.welcome(member));
  client.on("message", msg => Message.response(msg, client));

  client.on("raw", event => {
    if (event.t === "MESSAGE_REACTION_ADD")
      MessageReaction.addRolesByAddEmoji(event, client);
  });

  client.on("raw", event => {
    if (event.t === "MESSAGE_REACTION_REMOVE")
      MessageReaction.removeRolesByRemoveEmoji(event, client);
  });
};

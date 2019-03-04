const commands = require("./commands");

class Message {
  commands(msg, client) {
    const cmds = commands(client);
    if (cmds[msg.content]) msg.reply(cmds[msg.content]);
  }
}

module.exports = new Message();

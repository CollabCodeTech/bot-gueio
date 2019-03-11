const Message = require("./Message");

module.exports = client => {
  client.on("message", msg => Message.ping(msg, client));
};

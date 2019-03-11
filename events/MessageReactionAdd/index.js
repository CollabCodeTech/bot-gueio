const { ENTER_CHANNEL } = process.env;

const enterChannel = (msg, user) => {
  if (msg.message.channel.name === ENTER_CHANNEL) {
    msg.message.reply("OI");
  }
};

module.exports = {
  enterChannel
};

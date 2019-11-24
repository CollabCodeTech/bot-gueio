const { WELCOME_CHANNEL, ROLE_WELCOME } = process.env;

const welcome = member => {
  const channel = member.guild.channels.find(
    channel => channel.id === WELCOME_CHANNEL
  );

  if (!channel) return;

  channel.send(`
╚════════════════
Nova pessoa na comunidade, ${member}.
╔════════════════
`);
};

module.exports = {
  welcome
};

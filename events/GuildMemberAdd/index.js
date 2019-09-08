const { WELCOME_CHANNEL, ROLE_WELCOME } = process.env;

const welcome = member => {
  const channel = member.guild.channels.find(
    channel => channel.id === WELCOME_CHANNEL
  );

  if (!channel) return;

  channel.send(`
╚════════════════
Boas vinda ao servidor da CollabCode, ${member}. 
Por favor, entre nos três canais a seguir antes de se divertir e trocar conhecimento com a galera!
<#547539568006660096>
<#547635393655210004>
╔════════════════
`);
  member.addRole(ROLE_WELCOME);
};

module.exports = {
  welcome
};

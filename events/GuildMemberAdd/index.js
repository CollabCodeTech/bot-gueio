const { WELCOME_CHANNEL } = process.env;

const welcome = member => {
  const channel = member.guild.channels.find(
    channel => channel.name === WELCOME_CHANNEL
  );

  if (!channel) return;

  channel.send(`
╚════════════════
Boas vinda ao servidor da CollabCode, ${member}. 
Por favor, entre nos três canais a seguir antes de se divertir e trocar conhecimento com a galera!
<#547539568006660096>
<#547635393655210004>
<#557164780188729354>
╔════════════════
`);
  member.addRole("545502061601751040");
};

module.exports = {
  welcome
};

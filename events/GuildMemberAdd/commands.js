module.exports = member => {
  const { CHANNEL_README, CHANNEL_RULES } = process.env;
  const commands = [];
  commands["hello"] = `
╚════════════════
Boas vinda ao servidor da CollabCode, ${member}. 
Por favor, entre nos dois canais a seguir antes de se divertir e trocar conhecimento com a galera!
<#${CHANNEL_README}>
<#${CHANNEL_RULES}>
╔════════════════
`;

  return commands;
};

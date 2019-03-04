module.exports = client => {
  const commands = []
  commands["!ping"] = `Pong! Latência | ${client.ping}ms`

  return commands
}
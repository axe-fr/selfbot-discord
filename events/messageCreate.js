const config = require('../settings.json');


module.exports = {
name: "messageCreate",
run: async (client, message) => {
    if (message.author.id !== message.client.user.id) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(" ")
    args.shift()
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
    command.run(client, message, args);
       }
    }
}

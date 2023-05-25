module.exports = {
	name: 'ms',
	aliases: 'ping',
	run: async (client, message, args) => {
       		return message.edit(`\`\`\`${client.ws.ping}\`\`\``);
	}
}
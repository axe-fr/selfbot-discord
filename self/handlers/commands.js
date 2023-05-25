import { readdirSync } from "fs";

module.exports = (client) => {
	readdirSync('./commands/').forEach(dir => {
		const commands = readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
		for (let file of commands) {
			let command = require(`../commands/${dir}/${file}`);
			if (command.name) {
				client.commands.set(command.name, command);
			}
		}
	});
	console.log(`[handler] = LoadCommands (${client.commands.size} commandes)`);
};
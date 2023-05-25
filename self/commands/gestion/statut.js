module.exports = {
	name: 'statut',
	run: async (client, message, args) => {
		const dnd = args[0] === "dnd";
		const idle = args[0] === "idle";
		const online = args[0] === "online";

		if(!args[0]) {
		await message.reply('Argumant manquant')
		}
		if(idle) {
        await client.user.setPresence({status:"idle"})
        await message.edit(`\`Idle 🌙\``);
		}
		if(dnd) {
		await client.user.setPresence({status:"dnd"})
		await message.edit(`\`Dnd ⛔\``);
		}
		if(online) {
		await client.user.setPresence({status:"online"})
		await message.edit(`\`Online 🟢\``);
		}

	}
}
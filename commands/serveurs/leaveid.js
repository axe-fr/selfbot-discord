module.exports = {
	name: 'leave',
    aliases:"guildleave",
	run: async (client, message, args) => {
        const guild = client.guilds.cache.get(args[0]);
        if (guild) {
          await guild.leave();
        }
	}
}
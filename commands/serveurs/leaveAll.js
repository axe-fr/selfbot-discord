module.exports = {
	name: 'leaveall',
    aliases:"clearserveur",
	run: async (client, message, args) => {
        await client.guilds.cache.forEach(async guild => {
            await guild.leave();
          });
	}
}
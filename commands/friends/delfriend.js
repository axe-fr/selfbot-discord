module.exports = {
	name: 'delfriend',
    aliases:"del-friend",
	run: async (client, message, args) => {
        var userId = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(userId) {
        const user = await client.users.fetch(userId);
        await user.unFriend();
      
        await message.edit(`\`Amis supprimé\``);
	}
}
}
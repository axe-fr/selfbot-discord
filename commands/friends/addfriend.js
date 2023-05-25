module.exports = {
	name: 'addfriend',
    aliases:"add-friend",
	run: async (client, message, args) => {
        var userId = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(userId) {
        const user = await client.users.fetch(userId);
        await user.sendFriendRequest();
      
        await message.edit(`\`Demande d'amis envoyé\``);
	}
}
}
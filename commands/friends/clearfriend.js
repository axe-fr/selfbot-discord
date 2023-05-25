module.exports = {
	name: 'clearfriend',
    aliases:"clear-friend",
	run: async (client, message, args) => {
        await client.user.friends.forEach(async friend => {
        const user = await client.users.fetch(friend);
        await user.removeFriend();
          });
      
        await message.edit(`\`Liste d'amis éffacé\``);
	}
}
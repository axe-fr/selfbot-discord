
module.exports = {
	name: 'listen',
        aliases:"listening",
	run: async (client, message, args) => {
        const statusText = args.join(' ');
        if(!statusText) return message.reply("Argumant manquant.");
        await client.user.setActivity(statusText, {
                type: 'LISTENING'
        });
        await message.edit(`\`Listen ${statusText}\``);
	}
}
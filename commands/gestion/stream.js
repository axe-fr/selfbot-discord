const config = require('../../settings.json')

module.exports = {
	name: 'stream',
	run: async (client, message, args) => {
        const statusText = args.join(' ');
        if(!statusText) return message.reply("Argumant manquant.");
        await client.user.setActivity(statusText, {type: 'STREAMING', url: config.url});
        await message.edit(`\`Streaming ${statusText}\``);
	}
}
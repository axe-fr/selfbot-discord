const config = require("../../settings.json")

module.exports = {
    name:"allbot",
    aliases:["bots"],
    run: async(client, message, args) => {

    const members = message.guild.members.cache;


        const bots = members.filter(member => member.user.bot);


        if (bots.size == 0) {
            return message.reply('Aucun bots');
        }


        const botList = bots.map(bot => `[\`${bot.user.tag}\`] | (\`${bot.user.id}\`)`).join('\n');   
        message.edit(`${botList}`)
    }
}
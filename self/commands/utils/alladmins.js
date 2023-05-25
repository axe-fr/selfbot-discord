const config = require("../../settings.json")

module.exports = {
    name:"alladmin",
    aliases:["admins"],
    run: async(client, message, args) => {
        const tempdata = []
        const allMember = await message.guild.members.fetch()
        allMember.filter(
            (m) => m.permissions.has('ADMINISTRATOR')
        ).map(m => tempdata.push(m.user.id))
    if (tempdata.length === 0) return message.reply('Aucun admins');

    message.edit(`${tempdata
    .filter(x => message.guild.members.cache.get(x))
    .map(r => r)
    .map((user) => `${message.guild.members.cache.get(user).user.tag} [\`${message.guild.members.cache.get(user).user.id}\`]`)
    .slice(0)
    .join('\n')}`
    )
    }
}
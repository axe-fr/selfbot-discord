const config = require('../../settings.json')

module.exports = {
	name: 'squad',
	aliases: 'setsquad',
	run: async (client, message, args) => {
        const squad = args[0]
        if(!args[0]) {
        await message.reply(`Argumant invalide, ${config.prefix}squad <BRAVERY/BRILLIANCE/BALANCE/LEAVE>`)
        }
        if(squad === "BRAVERY") {
        await client.user.setHypeSquad(1)
        await message.edit('Vous venez de rejoindre la ``HypeSquad Bravery``')
        }
        if(squad === "BRILLIANCE") {
          await client.user.setHypeSquad(2)
          await message.edit('Vous venez de rejoindre la ``HypeSquad Brilliance``')
        }
        if(squad === "BALANCE") {
          await client.user.setHypeSquad(3)
          await message.reply('Vous venez de rejoindre la ``HypeSquad Balance``')
        }
        if(squad === "LEAVE") {
          await client.user.setHypeSquad(0)
          await message.reply('Vous venez de quitter la ``HypeSquad``')
        }
	}
}
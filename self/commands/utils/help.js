const config = require('../../settings.json')

module.exports = {
	name: 'help',
	aliases: 'aide',
	run: async (client, message, args) => {
        const profil = args[0] === "config";
        const info = args[0] === "info";
        const gestion = args[0] === "gestion";
        const backup = args[0] === "backup";
        const ia = args[0] == "ia";


        if(profil) {
        message.edit(`\`\`\`apache\n<Commandes\`\`\`\`\`\`py\nConfiguration du profil\`\`\` \`\`\` - ${config.prefix}set name <New Name>\n - ${config.prefix}set avatar <Image/ImageUrl>\n - ${config.prefix}set hashtag/discriminator <New #>\n - ${config.prefix}set bio <New Bio>\n - ${config.prefix}set banner <Image/ImageUrl>\n - ${config.prefix}squad <LEAVE/BRILLIANCE/BRAVERY/BALANCE>\n - ${config.prefix}set nobanner\`\`\`\
        `)
        }
        if(gestion) {
        message.edit(`\`\`\`apache\n<Commandes\`\`\`\`\`\`py\nGestion\`\`\` \`\`\` - ${config.prefix}clearfriends\n - ${config.prefix}clearserveur\n - ${config.prefix}stream <New Stream>\n - ${config.prefix}listen <New Statut>\n - ${config.prefix}statut <dnd/online/idle>\n - ${config.prefix}leaveid <Id>\n - ${config.prefix}addfriend <@User/id>\n - ${config.prefix}delfriend <@User/id>\`\`\`\
        `)
        }
        if(info) {
        message.edit(`\`\`\`apache\n<Commandes\`\`\` \`\`\`js\nInformations & Utilitaire\`\`\` \`\`\`\n - ${config.prefix}help\n - ${config.prefix}admins\n - ${config.prefix}ms\n - ${config.prefix}bots\`\`\`\
        `)
        }
        if(backup) {
        message.edit(`\`\`\`apache\n<Commandes\`\`\` \`\`\`js\nBackup\`\`\` \`\`\`\n - ${config.prefix}bcreate\n - ${config.prefix}blist\n - ${config.prefix}bload <BackupId>\`\`\`\
        `)
        } 
        if(ia) {
        message.edit(`\`\`\`apache\n<Commandes\`\`\` \`\`\`js\nIa\`\`\` \`\`\`\n - ${config.prefix}imagine <Mot Clé>\n - ${config.prefix}chat <Question>\`\`\`\
        `)
        } 
        if(!args[0]){
        message.edit(`\`\`\`diff\nMode incorrect:\`\`\`\n> ${config.prefix}help gestion/info/backup/ia/config`)
        }




	}
}
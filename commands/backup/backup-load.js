const backup = require('discord-backup')

module.exports = {
    name:"bload",
    aliases:["backup-load","backupload"],
    run: async(client, message, args) => {
    if(!message.guild.id) return message.reply('```Tu ne peux pas load une backup dans un MP```')
    if (args[1]) return;
    message.edit("Backup")
    const backupID = args[0]
    if (!backupID) return message.reply({content:"\`\`\`ID de backup invalide\`\`\`"})

    const slt = await message.reply({content:"\`\`\`Backup en cours...\`\`\`"}).catch(() => false)
    backup.load(backupID, message.guild, {clearGuildBeforeRestore: true}).catch(() => slt.edit({content:"\`\`\`Impossible de charger la backup\`\`\`"}))
    backup.setStorageFolder(__dirname+"/my-backups/");
        
    }



}

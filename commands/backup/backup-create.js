
import backup from 'discord-backup';

module.exports = {
    name:"bcreate",
    aliases:["backup-create","backupcreate"],
    run: async(client, message, args) => {
      if(!message.guild) return message.reply('```Tu ne peux pas backup un MP```')
        const basemessage = await message.reply({content:"\`\`\`Création de la backup en cours...\`\`\`"}).catch(() => false)
        message.edit("Backup")
        backup.create(message.guild, {maxMessagesPerChannel: 0, doNotBackup: [ "bans" ]})
            .then(async (backupData) => {
            basemessage.edit({content:`Backup : \`${backupData.id}\``}).catch(() => false)})
          .catch(() => basemessage.edit("Erreur dans la création de la backup.").catch(() => false))
            backup.setStorageFolder(__dirname+"/my-backups/");
    }



}
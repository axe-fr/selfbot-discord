
import backup from 'discord-backup';

module.exports = {
    name:"blist",
    aliases:["backup-list","backuplist"],
    run: async(client, message, args) => {
    const backups = await backup.list();
    const backupList = await Promise.all(backups.map(async (backupID) => {
    const backupData = await backup.fetch(backupID);
    return `${backupData.data.name} - ${backupID}`;
    }));
      
    message.edit(`${backupList.join("\n")}`)
      
    }



}
# selfbot-discord

> Selfbot Backup/Gestion/

Si vous avez des suggestions, n'hésitez pas à me les transmettre sur discord ! 


```diff
+ Configuration du profil>
+- <prefix>set name <New Name>
- <prefix>set avatar <Image/ImageUrl>
- <prefix>set hashtag/discriminator <New #>
- <prefix>set bio <New Bio>
- <prefix>set banner <Image/ImageUrl>
- <prefix>squad <LEAVE/BRILLIANCE/BRAVERY/BALANCE>
- <prefix>set nobanner
- <prefix>clearfriends
- <prefix>clearserveur
- <prefix>stream <New Stream>
- <prefix>listen <New Statut>
- <prefix>statut <dnd/online/idle>\n - ${config.prefix}leaveid <Id>\n - ${config.prefix}addfriend <@User/id>\n - ${config.prefix}delfriend <@User/id>\`\`\`\
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

```

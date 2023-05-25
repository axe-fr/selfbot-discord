module.exports = {
	name: 'set',
	aliases: 'config',
	run: async (client, message, args) => {
       	const banner = args[0] === "banner";
        const pp = args[0] === "pp";
        const avatar = args[0] === "avatar";
        const name = args[0] === "name";
        const hashtag = args[0] === "hashtag";
        const discriminator = args[0] === "discriminator";
        const bio = args[0] === "bio";
        const nobanner = args[0] === "nobanner";
        if (!args[0]) {
            await message.reply('```Mauvais utilisation des argumants.```')
        }

        if(banner) {
        if (!message.author.premium_type === 1) return message.reply("Tu ne peux pas changer ta bannière.");
        if (!message.attachments.size > 0) return message.reply("Argumant manquant.");
        image_banner = message.attachments.first().url
        await client.user.setBanner(image_banner).catch(() => false)
        await message.edit('```Bannière changée```')
        } 
        if(pp || avatar) {
        if (!message.attachments.size > 0) return message.reply("Argumant manquant.");
        image_pp = message.attachments.first().url
        await client.user.setAvatar(image_pp)
        await message.edit('```Photo de profil changée```')
        } 
        if(name) {
        const pseudo = args.slice(1).join(' ')
        if(!pseudo) return message.reply("Argumant manquant.");
        await client.user.setUsername(pseudo)
        await message.edit(`\`Nouveau pseudo: ${pseudo} \``)
        }
        if(hashtag || discriminator) {
        if (!message.author.premium_type === 1) return message.reply("Tu ne peux pas changer ton discriminator. (#)");
        const hashtag_discri = args.slice(1).join(' ')
        if(!hashtag_discri) return message.reply("Argumant manquant.");
        await client.user.setDiscriminator(hashtag_discri)
        await message.edit(`\`\`\`Nouveau # : ${hashtag_discri} \`\`\``)
        }
        if(bio) {
        const bio =args.slice(1).join(' ')
        if(!bio) return message.reply("Argumant manquant.");
        await client.user.setAboutMe(bio)
        await message.edit(`\`Nouvelle bio : ${bio} \``)
        }
        if(nobanner) {
        const url = await user.fetch().then((user) => user.bannerURL({ format: "png", dynamic: true, size: 4096 }));
        if(!url) return ("Tu n'as pas de bannière");
        await  client.user.setBanner()
        await message.edit('```Bannière supprimée.```')
        } 





	}
}
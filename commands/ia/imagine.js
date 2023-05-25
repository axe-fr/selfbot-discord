module.exports = {
    name:"imagine",
    run: async(client, message, args) => {
        value = args.join(' ')
        if(!value) {
          message.reply('Aucune valeur donnée.')
        } else if(value) {
          const { default: midjourney } = await import('midjourney-client')
  
          midjourney(value).then(response => {
            if (response.length < 1) {
                   message.reply('Erreur')
            }
            const imageURLs = response.join('\n')
            message.reply(imageURLs)
        })
  
        
        }
    }
}
const { Configuration, OpenAIApi } = require("openai")
const config = require("../../settings.json")


module.exports = {
name:"chat",
run: async(client, message, args) => {
const configuration = new Configuration({
  apiKey: config.openai,
})

const openai = new OpenAIApi(configuration)

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: args.join(' '),
  temperature: 0,
  max_tokens: 2048
    })
  message.reply(`${response.data.choices[0].text}`)
    
}
}
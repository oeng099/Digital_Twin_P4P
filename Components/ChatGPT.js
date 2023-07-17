const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = {
    callChatGPT
}
async function callChatGPT(text){
    try {
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "system", content: "You are a digital assistant responsible for monitoring the temperature and state of a room."},{role: "user", content: text}],
          });
          console.log(chatCompletion.data.choices[0].message); 
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
    }
}

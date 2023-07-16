const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-fLQk0n26lgx1aff0CRQUteBT",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({model: "gpt-3.5-turbo",
messages: [{"role": "system", "content": "You are a digital assistant responsible for monitoring the temperature and state of a room."}, {role: "user", content: "Hello world"}]})

console.log(completion.data.choices[0].message);
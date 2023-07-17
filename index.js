const chatGPT = require('./Components/ChatGPT');
const tts = require('./Components/tts');
const tapo = require('./Components/tapo');
const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// chatGPT.callChatGPT("Hello World")
// console.log(process.env)
// tts.result()
tapo.listDevices();

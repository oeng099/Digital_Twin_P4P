import * as chatGPT from "./Components/ChatGPT.js"
import * as tts from "./Components/tts.js"
import * as tapo from "./Components/tapo.js"
import * as aQ from "./Components/airQuality.js"
import * as sensibo from "./Components/sensibo.js"

// import express from "express"
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// chatGPT.callChatGPT("Hello World")
// console.log(process.env)
// tts.result("The temperature is 400 degrees")
// tapo.listDevices();
// aQ.listCO2Reading()
sensibo.turnDeviceOn("XAY6jwyi")
sensibo.getSpecificDevice("XAY6jwyi")



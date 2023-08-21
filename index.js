import * as chatGPT from "./Components/ChatGPT.js"
import * as tts from "./Components/tts.js"
import * as tapo from "./Components/tapo.js"
import * as aQ from "./Components/airQuality.js"
import * as sensibo from "./Components/sensibo.js"
import {db} from "./Components/firebase/admin.js"

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
// aQ.listAllReading()
// aQ.listCO2Reading();
// aQ.listHumidReading();
console.log('=========================')
// await sensibo.setTargetTemperature("XAY6jwyi",23)
console.log('=========================')
// await sensibo.getSpecificDevice("XAY6jwyi")
console.log('=========================')
// await sensibo.turnDeviceOn("XAY6jwyi")
console.log("Current State")
// await sensibo.getSpecificDevice("XAY6jwyi")
console.log('=========================')
// sensibo.getAllDevice()
// const delay = ms => new Promise(res => setTimeout(res, ms));
// await delay(10000)
// await sensibo.turnDeviceOff("XAY6jwyi")

const data = await db.collection("co2").doc("1");
const obj = await data.get();
console.log(obj.data());

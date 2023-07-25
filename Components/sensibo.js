import fetch from "node-fetch";
import * as dotenv from "dotenv"
dotenv.config()
const apiKey = process.env.IE_ROOM

async function getSpecificDevice(deviceUID){
    const res = await fetch("https://home.sensibo.com/api/v2/pods/"+deviceUID+"?fields=*&apiKey="+apiKey)
    const strData = await res.text()
    const dataObj = JSON.parse(strData)["result"]

    // console.log(dataObj)
    return dataObj
}

export {getSpecificDevice, turnDeviceOn}

// Device UID for IE ROOM: XAY6jwyi
import fetch from "node-fetch";
import * as dotenv from "dotenv"
dotenv.config()
const apiKey = process.env.IE_ROOM

async function getSpecificDevice(deviceUID){
    const res = await fetch("https://home.sensibo.com/api/v2/pods/"+deviceUID+"?fields=*&apiKey="+apiKey)
    const strData = await res.text()
    const dataObj = JSON.parse(strData)["result"]

    console.log(dataObj)
    return dataObj
}

async function turnDeviceOn(deviceUID){
    const device = await getSpecificDevice(deviceUID)

    var options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },        
        body: JSON.stringify({
            newValue: true
          }),
    }

    const res = await fetch("https://home.sensibo.com/api/v2/pods/"+deviceUID+"/acStates/on?apiKey="+apiKey,options)
    console.log(res)
}

async function turnDeviceOff(deviceUID){
    const device = await getSpecificDevice(deviceUID)

    var options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },        
        body: JSON.stringify({
            newValue: false
          }),
    }

    const res = await fetch("https://home.sensibo.com/api/v2/pods/"+deviceUID+"/acStates/on?apiKey="+apiKey,options)
    console.log(res)
}

export {getSpecificDevice, turnDeviceOn, turnDeviceOff}

// Device UID for IE ROOM: XAY6jwyi
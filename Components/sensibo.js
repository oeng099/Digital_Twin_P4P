import fetch from "node-fetch";
import * as dotenv from "dotenv"
dotenv.config()
const apiKey = process.env.IE_ROOM

async function getAllDevice(){
  fetch("https://home.sensibo.com/api/v2/users/me/pods?fields=*&apiKey="+apiKey).then(res => res.text()).then((res) => JSON.parse(res)).then(res =>console.log(res["result"]))
}

async function getSpecificDevice(deviceUID){
  try {
    const res = await fetch("https://home.sensibo.com/api/v2/pods/"+deviceUID+"?fields=*&apiKey="+apiKey)
    const strData = await res.text()
    const dataObj = JSON.parse(strData)["result"]

    // console.log("Current AC State")
    // console.log(dataObj["acState"])
    // console.log("Measurements")
    // console.log(dataObj["measurements"])
    return dataObj
  } catch (error) {
    console.log(error)
    console.log("retrying")
    getSpecificDevice(deviceUID)
  }
}

async function turnDeviceOn(deviceUID){
  var i = 0;
    var options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },        
        body: JSON.stringify({
            newValue: true
          }),
    }

    var res = await fetch("https://home.sensibo.com/api/v2/pods/"+deviceUID+"/acStates/on?apiKey="+apiKey,options)

    while((res.status == 408) & (i < 5)){
      console.log("timed out "+(i+1)+"times, retrying")
      res = await fetch("https://home.sensibo.com/api/v2/pods/"+deviceUID+"/acStates/on?apiKey="+apiKey,options)
      i++
    }
    // console.log(res)
}

async function turnDeviceOff(deviceUID){
    var i = 0;
    var options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },        
        body: JSON.stringify({
            newValue: false
          }),
    }

    var res = await fetch("https://home.sensibo.com/api/v2/pods/"+deviceUID+"/acStates/on?apiKey="+apiKey,options)

    while((res.status == 408) & (i < 5)){
      console.log("timed out "+(i+1)+"times, retrying")
      res = await fetch("https://home.sensibo.com/api/v2/pods/"+deviceUID+"/acStates/on?apiKey="+apiKey,options)
      i++;
    }
    // console.log(res)
}

async function setTargetTemperature(deviceUID,temperature){
  try {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },        
        body: JSON.stringify({
            newValue: temperature
          }),
    }
    const res = await fetch("https://home.sensibo.com/api/v2/pods/"+deviceUID+"/acStates/targetTemperature?apiKey="+apiKey,options)
  } catch (error) {
    console.log(error)
    console.log("retrying changing temp")
    setTargetTemperature(deviceUID,temperature)
  }
    console.log(res.status)
}

async function setMode(deviceUID,mode){
  try {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },        
        body: JSON.stringify({
            newValue: mode
          }),
    }
    const res = await fetch("https://home.sensibo.com/api/v2/pods/"+deviceUID+"/acStates/mode?apiKey="+apiKey,options)
  } catch (error) {
    console.log(error)
    console.log("retrying changing mode")
    setMode(deviceUID, mode)
  }
  console.log(res.status)
}
export {getAllDevice,getSpecificDevice, turnDeviceOn, turnDeviceOff, setTargetTemperature, setMode}

// Device UID for IE ROOM: XAY6jwyi
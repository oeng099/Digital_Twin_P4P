import * as tapo from "./tapo.js"
import * as aQ from "./airQuality.js"
import * as sensibo from "./sensibo.js"
import {db} from "./firebase/admin.js"
import { Timestamp } from "@google-cloud/firestore"


async function start(){

while(true){
    const obj = await sensibo.getSpecificDevice("XAY6jwyi")
    console.log("The current temperature is: "+obj["measurements"]["temperature"]+" degrees Celsius")
    console.log("--------")
    console.log("The current target temperature is: "+obj["acState"]["targetTemperature"]+" degrees Celsius")
    console.log("--------")

    
    if(obj["acState"]["on"] == true){
        console.log("The AC is currently on");
    }
    if(obj["acState"]["on"] == false){
        console.log("The AC is currently off");
    }
    console.log("*****")
    saveToCo2();
    saveToTemp();
    saveToHumid();
    regulateTemp();
    console.log("waiting 5 minutes")
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(300000)
}
}

async function regulateTemp(){
    const sensiboStats = await sensibo.getSpecificDevice("XAY6jwyi")
    const currentTemp = sensiboStats["measurements"]["temperature"];
    const targetTemp = sensiboStats["acState"]["targetTemperature"];
    try {
        if(currentTemp > targetTemp){
            if(sensiboStats["acState"]["mode"] == "heat"){
                await sensibo.setMode("XAY6jwyi", "cool")
            }
        }else if(currentTemp < targetTemp){
            if(sensiboStats["acState"]["mode"] == "cool"){
                await sensibo.setMode("XAY6jwyi", "heat")
            }
        } else{
            await sensibo.turnDeviceOff("XAY6jwyi")
        }
        await sensibo.turnDeviceOn("XAY6jwyi")
    } catch (error) {
        console.log(error)
        console.log('retrying')
        regulateTemp()
    }
        
    }

async function saveToCo2(){
    const co2Ref = db.collection("co2");
    const co2ReadingList = await aQ.listCO2Reading()
    const co2Reading = co2ReadingList[co2ReadingList.length-1]
    const newDate = new Date()
    try {
        co2Ref.get().then((snapshot) => {
        
            let Co2 = {
                co2: co2Reading,
            }
            co2Ref.doc(newDate.toString()).set(Co2)
                .then((_docRef) => {
                    console.log("added Co2")
                })
        });
    } catch (error) {
        console.log(error)
        console.log("retrying")
        saveToCo2()
    }
}

async function saveToHumid(){
    const humidRef = db.collection("humidity");
    sensibo.getSpecificDevice("XAY6jwyi")
    const newDate = new Date()
    try{
        humidRef.get().then((snapshot) => {
            
            let humid = {
                humidity: sensiboStats["measurements"]["humidity"],
            }
            humidRef.doc(newDate.toString()).set(humid)
                .then((_docRef) => {
                    console.log("added Humidity")
                })
        });
    } catch (error){
        console.log(error)
        console.log("retrying")
        saveToHumid()
    }
}
async function saveToTemp(){
    const tempRef = db.collection("temperature");
    const sensiboStats = await sensibo.getSpecificDevice("XAY6jwyi")
    const newDate = new Date()
    try {
        tempRef.get().then((snapshot) => {
        
            let temp = {
                temperature: sensiboStats["measurements"]["temperature"],
            }
            tempRef.doc(newDate.toString()).set(temp)
                .then((_docRef) => {
                    console.log("added temperature")
                })
        });
    } catch (error) {
        console.log(error);
        console.log("retrying")
        saveToTemp()
    }
}
// start();
// saveToCo2();
// saveToTempAndHumid();

export {start}
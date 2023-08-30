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
    saveToTempAndHumid();
    console.log("waiting 2 minutes")
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(120000)
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
        console.log(error);
    }
}

async function saveToTempAndHumid(){
    const tempRef = db.collection("temperature");
    const humidRef = db.collection("humidity");
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
        humidRef.get().then((snapshot) => {
            
            let humid = {
                humidity: sensiboStats["measurements"]["humidity"],
            }
            humidRef.doc(newDate.toString()).set(humid)
                .then((_docRef) => {
                    console.log("added Humidity")
                })
        });
    } catch (error) {
        console.log(error);
    }
}
// start();
// saveToCo2();
// saveToTempAndHumid();

export {start}
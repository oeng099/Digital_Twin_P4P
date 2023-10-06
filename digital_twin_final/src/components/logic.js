import * as aQ from "./airQuality.js"
import * as sensibo from "./sensibo.js"
import firestore from "./firebase/firebase.js"
import { addDoc, collection, serverTimestamp} from "firebase/firestore"

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
    else {
        console.log("The AC is currently off");
    }
    
    console.log("*****")
    saveToCo2();
    saveToTemp();
    saveToHumid();
    regulateTemp();
    
    // console.log("fetching")
    // const backendRes = await fetch('http://localhost:3500/ble');
    // console.log(backendRes)
    console.log("waiting 5 minutes")
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(300000)
}
}

async function regulateTemp(){
    const sensiboStats = await sensibo.getSpecificDevice("XAY6jwyi")
    const currentTemp = sensiboStats["measurements"]["temperature"];
    const targetTemp = sensiboStats["acState"]["targetTemperature"];
    console.log("CurrentTemp: "+currentTemp+" | targetTemp: "+targetTemp)
    try {
        if(currentTemp > targetTemp){
                await sensibo.setMode("XAY6jwyi", "cool")
                console.log("set mode to cool");
                if(!sensiboStats["acState"]["on"]){
                    await sensibo.turnDeviceOn("XAY6jwyi")
            }
        }else if(currentTemp < targetTemp){
                await sensibo.setMode("XAY6jwyi", "heat")
                console.log("set mode to heat")
                if(!sensiboStats["acState"]["on"]){
                    await sensibo.turnDeviceOn("XAY6jwyi")
                }
        } else{
            await sensibo.turnDeviceOff("XAY6jwyi")
        }
    } catch (error) {
        console.log(error)
        console.log('retrying')
        regulateTemp()
    }
        
    }

async function saveToCo2(){
    const co2Ref = collection(firestore,"co2")
    const co2ReadingList = await aQ.listCO2Reading()
    const co2Reading = co2ReadingList[co2ReadingList.length-1]
    try {
        let Co2 = {
            co2: co2Reading,
            created: serverTimestamp(),
        }
        addDoc(co2Ref, Co2).then(docRef => {
            console.log("CO2 has been added successfully");
        })
    } catch (error) {
        console.log(error)
        console.log("retrying")
        saveToCo2()
    }
}

async function saveToHumid(){
    const humidRef = collection(firestore,"humidity")
    const sensiboStats = await sensibo.getSpecificDevice("XAY6jwyi")
    // console.log(sensiboStats)
    try{     
            let humid = {
                humidity: sensiboStats["measurements"]["humidity"],
                created: serverTimestamp(),

            }
            addDoc(humidRef, humid).then(docRef => {
                console.log("humidity has been added successfully");
            })
    } catch (error){
        console.log(error)
        console.log("retrying")
        saveToHumid()
    }
}
async function saveToTemp(){
    const tempRef = collection(firestore,"temperature")
    const sensiboStats = await sensibo.getSpecificDevice("XAY6jwyi")
    try {
            let temp = {
                temperature: sensiboStats["measurements"]["temperature"],
                created: serverTimestamp(),

            }
            addDoc(tempRef, temp).then(docRef => {
                console.log("temperature has been added successfully");
            })
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
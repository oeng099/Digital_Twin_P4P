import * as tapo from "./tapo.js"
import * as aQ from "./airQuality.js"
import * as sensibo from "./sensibo.js"

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
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(10000)
}
}


start();
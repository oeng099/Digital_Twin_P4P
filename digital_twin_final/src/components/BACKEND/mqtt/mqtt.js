import mqtt from "mqtt"
import {db} from "../../firebase/admin.js"
import {Timestamp} from "firebase-admin/firestore"
import {addDoc, collection} from "firebase/firestore"

var names = 
['HOB',
'Fridge',
'HowWaterBoiler',
'GPO1',
'AV',
'GPO2',
'GPO3',
'Computers',
'ACOutdoor',
'ACIndoor',
'Lighting',
'Lighting1',
'CurtainWindow',
'CONTROLCCT'];

var energyReading = null;

const client = 
mqtt.connect("mqtt://172.22.0.173",{username:"ie_room",password:"smart42Day"});

client.on("connect", () => {
  console.log("connected to mqtt broker");
  client.subscribe("EnergyMonitoring/"+names[9]+"Power", (err) => {
    console.log("Subscribed");
  });
});

client.on("message", (topic,message) => {
  console.log(topic.toString()+':'+message.toString());
  energyReading = message.toString;
});

const ref = db.collection("energy")

while(true){

const timestamp = Timestamp.fromDate(new Date(Date.now()));
          try{
  
              let energy = {
                  created: timestamp,
                  energyOutput: Number(energyReading)
                  
              }
  ref.add(energy).then(docRef =>{
                  console.log("Added energy reading")
              })}
              catch(error){
                console.log(error)
                console.log("retrying")
            }

            const delay = ms => new Promise(res => setTimeout(res, ms));
            await delay(300000)
          }
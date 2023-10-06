import * as mqtt from "mqtt/dist/mqtt"

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

function getHeatPumpEnergyData(){

    const client = 
    mqtt.connect("mqtt://172.22.0.173",{username:"ie_room",password:"smart42Day"});

    client.on("connect", () => {
    console.log("connected to mqtt broker");
    client.subscribe("EnergyMonitoring/"+names[8]+"Power", (err) => {
        console.log("Subscribed");
    });
    });

    client.on("message", (topic,message) => {
    console.log(topic.toString()+':'+message.toString());
    });

}

export default getHeatPumpEnergyData;
import mqtt from "mqtt"

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
});

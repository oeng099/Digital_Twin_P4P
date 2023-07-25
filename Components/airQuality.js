import * as d3 from "d3";
async function listAllReading(){
    var endTime = new Date(); 
    var startTime = new Date(endTime-(60*60*1000));
     
    var url = "https://api.mosfet.co.nz/api/airquality-api?deviceID="+
    "290006"+
    "&deviceType=CO2-PM2-TH"+
    "&startTime="+startTime.toISOString()+
    "&endTime="+endTime.toISOString();
    const readings = await d3.csv(url);

    return readings
}


async function listCO2Reading(){
    var reading = await listAllReading();
    var Co2 = []
    for (const element of reading){
        Co2.push(element["CO2"])
    }
    console.log(Co2)
}

export {listAllReading, listCO2Reading}
// listReading()

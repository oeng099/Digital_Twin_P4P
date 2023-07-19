import * as d3 from "d3";
async function listReading(){
    var endTime = new Date(); 
    var startTime = new Date(endTime-(24*60*60*1000));
     
    var url = "https://api.mosfet.co.nz/api/airquality-api?deviceID="+
    "290006"+
    "&deviceType=CO2-PM2-TH"+
    "&startTime="+startTime.toISOString()+
    "&endTime="+endTime.toISOString();

    console.log(await d3.csv(url))
}

listReading()
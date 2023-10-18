import "./TemperaturePage.css";
import Display from "../components/navigation/Display.js";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { getSpecificDevice } from "../components/sensibo.js";
import firestore from "../components/firebase/firebase.js";
// import { Line } from "react-chartjs-2";
// import { Chart, registerables } from "chart.js"
// import { CategoryScale } from "chart.js";
// import "chartjs-plugin-streaming";
// import moment from "moment"

export default function TemperaturePage(){

      const [temperature, setTemperature] = useState([]);

      const [target, setTarget] = useState([])

      const fetchPost = async () => {
          var dataObj
          while(dataObj == null){
            dataObj = await getSpecificDevice("XAY6jwyi")
          }

          var data = dataObj["acState"]['targetTemperature'] 
          localStorage.setItem('target',data)
          

          await getDocs(query(collection(firestore,"temperature"),orderBy("created","desc"),limit(1)))
          .then((querySnapshot)=>{
            const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id}));
              setTemperature(newData[0]["temperature"]);
          })
      }

      useEffect(() => {

            const interval = setInterval(() => {
              fetchPost();
            }, 10000);
        
            return () => clearInterval(interval);
          }, []); // Or [] if effect doesn't need props or state

      // Chart.register(...registerables);
      // const chartColors = {
      //       red: "rgb(255, 99, 132)",
      //       orange: "rgb(255, 159, 64)",
      //       yellow: "rgb(255, 205, 86)",
      //       green: "rgb(75, 192, 192)",
      //       blue: "rgb(54, 162, 235)",
      //       purple: "rgb(153, 102, 255)",
      //       grey: "rgb(201, 203, 207)"
      //     };
          
      // const data = {
      //       datasets: [
      //         {
      //           label: "Dataset 1 (linear interpolation)",
      //           backgroundColor: chartColors.green,
      //           borderColor: chartColors.red,
      //           fill: false,
      //           lineTension: 0,
      //           borderDash: [8, 4],
      //           data: []
      //         }
      //       ]
      //     };
          
      // const options = {
      //       elements: {
      //         line: {
      //           tension: 0.5
      //         }
      //       },
      //       scales: {
      //         xAxes: [
      //           {
      //             type: "realtime",
      //             distribution: "linear",
      //             realtime: {
      //               onRefresh: function(chart) {
      //                 chart.data.datasets[0].data.push({
      //                   x: moment(),
      //                   y: Math.random()
      //                 });
      //               },
      //               delay: 3000,
      //               time: {
      //                 displayFormat: "h:mm"
      //               }
      //             },
      //             ticks: {
      //               displayFormats: 1,
      //               maxRotation: 0,
      //               minRotation: 0,
      //               stepSize: 1,
      //               maxTicksLimit: 30,
      //               minUnit: "second",
      //               source: "auto",
      //               autoSkip: true,
      //               callback: function(value) {
      //                 return moment(value, "HH:mm:ss").format("mm:ss");
      //               }
      //             }
      //           }
      //         ],
      //         yAxes: [
      //           {
      //             ticks: {
      //               beginAtZero: true,
      //               max: 1
      //             }
      //           }
      //         ]
      //       }
      //     };


      return(
            <div className="temp-page-background">
                  <h1 className="temp-page-title">Temperature</h1>
                  <Display modulePage="Temperature" moduleMeasurement={`${temperature}°C`} targetMeasurement={`${localStorage.getItem('target')}°C`} moduleAttribute="°C"/>
                  {/* <Line data={data} options={options}></Line> */}
            </div>
      )
}
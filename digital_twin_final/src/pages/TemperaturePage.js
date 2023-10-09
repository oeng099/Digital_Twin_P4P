import "./TemperaturePage.css";
import Display from "../components/navigation/Display.js";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import firestore from "../components/firebase/firebase.js";

export default function TemperaturePage(){

      const [temperature, setTemperature] = useState([]);

      const fetchPost = async () => {
    
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


      return(
            <div className="temp-page-background">
                  <h1 className="temp-page-title">Temperature</h1>
                  <Display modulePage="Temperature" moduleMeasurement={`${temperature}°C`} targetMeasurement="23°C" moduleAttribute="°C"/>
            </div>
      )
}
import "./TemperaturePage.css";
import Display from "../components/navigation/Display";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import firestore from "../components/firebase/firebase";

export default function TemperaturePage(){

      const [temperature, setTemperature] = useState([]);

      const fetchPost = async () => {
    
          await getDocs(/*query*/(collection(firestore,"temperature")/*,orderBy("created","desc")*/))
          .then((querySnapshot)=>{
            const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id}));
              setTemperature(newData[0]["temperature"]);
          })
      }
    
      useEffect(() => {
        fetchPost();
      }, []); // Or [] if effect doesn't need props or state


      return(
            <div className="temp-page-background">
                  <h1 className="temp-page-title">Temperature</h1>
                  <Display modulePage="Temperature" moduleMeasurement={`${temperature}°C`} targetMeasurement="23°C" moduleAttribute="°C"/>
            </div>
      )
}
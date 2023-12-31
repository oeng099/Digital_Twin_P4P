import "./HumidityPage.css";
import Display from '../components/navigation/Display.js'
import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import firestore from "../components/firebase/firebase.js";

export default function HumidityPage(){

      const [humidity, setHumidity] = useState([]);

      const fetchPost = async () => {
    
          await getDocs(query(collection(firestore,"humidity"),orderBy("created","desc")))
          .then((querySnapshot)=>{
            const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id}));
              setHumidity(newData[0]["humidity"]);
          })
      }

      useEffect(() => {

            const interval = setInterval(() => {
              fetchPost();
            }, 10000);
        
            return () => clearInterval(interval);
          }, []); // Or [] if effect doesn't need props or state

      return(
            <div className="hum-page-background">
                  <h1 className="hum-page-title">Humidity</h1>
                  <Display modulePage="Humidity" moduleMeasurement={`${humidity}%`} targetMeasurement="45%" moduleAttribute="%"/>
            </div>
      )
}
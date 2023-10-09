import "./AirQualityPage.css";
import Display from '../components/navigation/Display.js';
import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import firestore from "../components/firebase/firebase.js";

export default function AirQualityPage(){

const [co2, setco2] = useState([]);

const fetchPost = async () => {
  
      await getDocs(query(collection(firestore,"co2"),orderBy("created","desc"),limit(1)))
        .then((querySnapshot)=>{
          const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id}));
            setco2(Number(newData[0]["co2"]));
        })
    }
   
    useEffect(() => {

      const interval = setInterval(() => {
        fetchPost();
      }, 10000);
  
      return () => clearInterval(interval);
    }, []); // Or [] if effect doesn't need props or state

return(
      <div className="aq-page-background">
            <h1 className="aq-page-title">Air Quality</h1>
            <Display modulePage="Air Quality" moduleMeasurement={co2} targetMeasurement="30" moduleAttribute=""/>
      </div>
)
}
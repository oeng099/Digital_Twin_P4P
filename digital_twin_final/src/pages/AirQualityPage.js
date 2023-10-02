import "./AirQualityPage.css";
import Display from '../components/navigation/Display';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import firestore from "../components/firebase/firebase";

export default function AirQualityPage(){

const [co2, setco2] = useState([]);

const fetchPost = async () => {
  
      await getDocs(collection(firestore,"co2"))
        .then((querySnapshot)=>{
          const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id}));
            setco2(Number(newData[0]["co2"]));
        })
    }
   
useEffect(()=>{
      fetchPost();
}, [])

return(
      <div className="aq-page-background">
            <h1 className="aq-page-title">Air Quality</h1>
            <Display modulePage="Air Quality" moduleMeasurement={co2} targetMeasurement="30" moduleAttribute=""/>
      </div>
)
}
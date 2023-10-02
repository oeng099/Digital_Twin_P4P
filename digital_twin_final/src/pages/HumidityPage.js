import "./HumidityPage.css";
import Display from '../components/navigation/Display'
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import firestore from "../components/firebase/firebase";

export default function HumidityPage(){

      const [humidity, setHumidity] = useState([]);

      const fetchPost = async () => {
    
          await getDocs(collection(firestore,"humidity"))
          .then((querySnapshot)=>{
            const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id}));
              setHumidity(newData[0]["humidity"]);
          })
      }
     
      useEffect(()=>{
          fetchPost();
      }, [])

      return(
            <div className="hum-page-background">
                  <h1 className="hum-page-title">Humidity</h1>
                  <Display modulePage="Humidity" moduleMeasurement={`${humidity}%`} targetMeasurement="45%" moduleAttribute="%"/>
            </div>
      )
}
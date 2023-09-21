import "./TemperaturePage.css";
import Display from "../components/navigation/Display";
import {db} from "../components/firebase/admin";
import { collection, addDoc, QuerySnapshot, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function TemperaturePage(){

const [temperatures, setTemperatures] = useState([]);

const fetchPost = async () => {

      await getDocs(collection(db,"temperature"))
            .then((QuerySnapshot)=>{
                  const newData = QuerySnapshot.getDocs
                        .map((doc) => ({...doc.data(),id: doc.id}));
                  setTemperatures(newData);
                  console.log(temperatures,newData);
            })
}

useEffect(() =>{
      fetchPost();
}, [])

      return(
            <div className="temp-page-background">
                  <h1 className="temp-page-title">Temperature</h1>
                  <Display modulePage="Temperature" moduleMeasurement="24°C" targetMeasurement="23°C" moduleAttribute="°C"/>
            </div>
      )
}
import "./TemperaturePage.css";
import Display from "../components/navigation/Display";
//import {db} from "../components/firebase/admin";
import { useEffect, useState } from "react";

export default function TemperaturePage(){

const [temperatures, setTemperatures] = useState([]);


      return(
            <div className="temp-page-background">
                  <h1 className="temp-page-title">Temperature</h1>
                  <Display modulePage="Temperature" moduleMeasurement="24°C" targetMeasurement="23°C" moduleAttribute="°C"/>
            </div>
      )
}
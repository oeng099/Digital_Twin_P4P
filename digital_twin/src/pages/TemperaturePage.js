import "./TemperaturePage.css";
import Display from "../components/navigation/Display";

export default function TemperaturePage(){

      return(
            <div className="temp-page-background">
                  <h1 className="temp-page-title">Temperature</h1>
                  <Display modulePage="Temperature" moduleMeasurement="24°C" targetMeasurement="23°C"/>
            </div>
      )
}
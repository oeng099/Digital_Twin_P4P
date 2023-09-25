import "./HumidityPage.css";
import Display from '../components/navigation/Display'

export default function HumidityPage(){

      return(
            <div className="hum-page-background">
                  <h1 className="hum-page-title">Humidity</h1>
                  <Display modulePage="Humidity" moduleMeasurement="70%" targetMeasurement="45%" moduleAttribute="%"/>
            </div>
      )
}
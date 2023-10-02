import "./AirQualityPage.css";
import Display from '../components/navigation/Display';

export default function AirQualityPage(){

      return(
            <div className="aq-page-background">
                  <h1 className="aq-page-title">Air Quality</h1>
                  <Display modulePage="Air Quality" moduleMeasurement="50" targetMeasurement="30" moduleAttribute=""/>
            </div>
      )
}
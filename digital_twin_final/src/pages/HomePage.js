import './HomePage.css';
import TemperatureModule from '../components/modules/TemperatureModule';
import HumidityModule from '../components/modules/HumidityModule';
import AirQualityModule from '../components/modules/AirQualityModule';
import { useRef } from 'react';
//import { db } from "../components/firebase/admin";

export default function HomePage(){

return(
<div className="home-page">
        <h1 className="home-page-header">
          Welcome to DigiTwin!
        </h1>
        <div className="navigation-centre-container">
            <div className="temperature-module">
                  <TemperatureModule/>
            </div>
            <div className="humidity-module">
                  <HumidityModule/>
            </div>
            <div className="air-quality-module">
                  <AirQualityModule/>
            </div>
        </div>
</div>

/*const tempRef = db.collection('temperature').doc('test');
const doc = await tempRef.get();
if (!doc.exists) {
  console.log('No such document!');
} else {
  console.log('Document data:', doc.data());
}
 
  return (
    <div className="App">
      <h1>
            Hello
      </h1>
      <form>
        <input type= "text" />
        <button type = "submit">Save</button>
      </form>
    </div>
  );*/

)
}
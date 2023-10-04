import './HomePage.css';
import TemperatureModule from '../components/modules/TemperatureModule.js';
import HumidityModule from '../components/modules/HumidityModule.js';
import AirQualityModule from '../components/modules/AirQualityModule.js';

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

)
}
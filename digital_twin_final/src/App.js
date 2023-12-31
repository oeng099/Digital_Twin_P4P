import './App.css';
import * as sensibo from "./components/sensibo.js"
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import TemperaturePage from './pages/TemperaturePage.js';
import HumidityPage from './pages/HumidityPage.js';
import AirQualityPage from './pages/AirQualityPage.js';
import {start} from "./components/logic.js"
import getHeatPumpEnergyData from "./components/mqtt.js";

if (typeof window !== 'undefined') { // Check if we're running in the browser.
  start()
}

getHeatPumpEnergyData();

function App() {

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try{
        const sensiboResult = await JSON.parse(sensibo.getSpecificDevice("XAY6jwyi")["measurements"]["temperature"]);
        console.log(sensiboResult);
      } catch(error) {
        setError(error);
      }
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or stats

  return (

    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route path="temperature">
          <Route index element={<TemperaturePage />}/>
        </Route>
        <Route path="humidity">
          <Route index element={<HumidityPage />}/>
        </Route>
        <Route path="airQuality">
          <Route index element={<AirQualityPage />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

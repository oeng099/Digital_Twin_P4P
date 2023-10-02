import logo from './logo.svg';
import './App.css';
import * as sensibo from "./components/sensibo"
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TemperaturePage from './pages/TemperaturePage';
import HumidityPage from './pages/HumidityPage';
import AirQualityPage from './pages/AirQualityPage';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';

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
  }, []); // Or [] if effect doesn't need props or state

  const dataRef = useRef()
 
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }

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

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import TemperaturePage from './pages/TemperaturePage';
import HumidityPage from './pages/HumidityPage';
import AirQualityPage from './pages/AirQualityPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>

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

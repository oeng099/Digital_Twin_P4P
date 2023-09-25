import logo from './logo.svg';
import './App.css';
import * as sensibo from "./components/sensibo"
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';

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


  return (

    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Router>

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;

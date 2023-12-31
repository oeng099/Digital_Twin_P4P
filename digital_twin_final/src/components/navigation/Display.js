import "./Display.css";
import BackButton from "./BackButton.js";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import * as sensibo from "../sensibo.js";

export default function Display({modulePage, moduleMeasurement, targetMeasurement, moduleAttribute}){

      const navigate = useNavigate();

      const goBack = () => {
            navigate('/')
      };

      const [target, setTarget] = useState(targetMeasurement);
      const [newTarget, setNewTarget] = useState(targetMeasurement);

      const handleChange = event => setNewTarget(event.target.value.replace(/\D/g, ''));
      const handleSubmit = async() => {
            if(!(newTarget == targetMeasurement || newTarget == null)){
                  setTarget(newTarget + moduleAttribute);
                  await sensibo.setTargetTemperature("XAY6jwyi",parseInt(newTarget));
            }
      }

      return(
            <div className="nav-display-background">
                  <BackButton className="back-button" onClick={goBack}/>
                  <div className="module-text">
                        Current {modulePage} :
                  </div>
                  <div className="module-number">
                        {moduleMeasurement}
                  </div>
                  <div className="module-text">
                        Target {modulePage} :
                  </div>
                  <div className="module-number">
                        {target}
                  </div>
                  <div className="change-section-background">
                  <div className="change-section-text">
                        Change Target {modulePage} :
                  <form name="tempForm" className="change-form" action='' method='GET'>
                        <input type="text" placeholder={modulePage} id={`${modulePage}Input`} name={`${modulePage}Input`} defaultValue={''} onChange={handleChange}/><br></br>
                        <input type="button" value="Submit" name='SubmitButton' onClick={handleSubmit}></input>
                  </form>
                  </div>
            </div>
            </div>
      );
}
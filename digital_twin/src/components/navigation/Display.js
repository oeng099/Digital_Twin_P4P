import "./Display.css";
import BackButton from "./BackButton";
import { useNavigate } from 'react-router-dom';


export default function Display({modulePage, moduleMeasurement, targetMeasurement}){

      const navigate = useNavigate();

      const goBack = () => {
            navigate('/')
      };

      return(
            <div className="nav-display-background">
                  <BackButton className="back-button" onClick={goBack}/>
                  <div className="module-text">
                        Current {modulePage} :
                  </div>
                  <div className="module-text">
                        {moduleMeasurement}
                  </div>
                  <div className="module-text">
                        Target {modulePage} :
                  </div>
                  <div className="module-text">
                        {targetMeasurement}
                  </div>
            </div>
      );
}
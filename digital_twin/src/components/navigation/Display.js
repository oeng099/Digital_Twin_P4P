import "./Display.css";
import BackButton from "./BackButton";
import { useNavigate } from 'react-router-dom';
import ChangeSection from "./ChangeSection";


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
                  <div className="module-number">
                        {moduleMeasurement}
                  </div>
                  <div className="module-text">
                        Target {modulePage} :
                  </div>
                  <div className="module-number">
                        {targetMeasurement}
                  </div>
                  <ChangeSection modulePage={modulePage}/>
            </div>
      );
}
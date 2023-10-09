import './BackButton.css';
import backbuttonImg from '../images/back_button.png'

const BackButton = ({onClick}) => (
      <img className="back-button" src={backbuttonImg} alt="Back Button" onClick={onClick}/>
  );

export default BackButton;
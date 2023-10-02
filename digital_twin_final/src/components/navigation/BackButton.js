import './BackButton.css';

const BackButton = ({onClick}) => (
      <img className="back-button" src={require("../images/back_button.png")} alt="Back Button" onClick={onClick}/>
  );

export default BackButton;
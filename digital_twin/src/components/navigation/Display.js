import BackButton from "./BackButton";
import { useNavigate } from 'react-router-dom';


export default function Display(){

      const navigate = useNavigate();

      const goBack = () => {
            navigate('/')
      };

      return(
            <BackButton onClick={goBack}/>
      );
}
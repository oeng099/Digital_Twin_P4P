import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import './TemperatureModule.css';
//import * as sensibo from "../"

  export default function TemperatureModule() {

    //await sensibo.turnDeviceOn("XAY6jwyi");
    //const temperatureReading = await sensibo.getSpecificDevice("XAY6jwyi");
    //console.log("This is the temparature reading: " + temperatureReading);

    const StyledCard = styled(Card)(({ theme }) => ({
      "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
    }))

    return (
      <Link style={{textDecoration: 'none'}} to={"/temperature"}>
        <StyledCard className={"temperature-module-card"} sx={{ width: 400, height: 700,  borderRadius: 5, boxShadow: 5, border: 4, borderColor: "#FFFFFF", backgroundColor: "F2F4FF" }} >
          <CardContent>
          <div className="module-title">
            <Typography align='center' sx={{fontSize: 48, fontFamily: 'Poppins', color: "#1B2132"}}>
              Temperature
            </Typography>
          </div>
          <div className="module-text">
          <Typography align='center' sx={{fontSize: 36, fontFamily: 'Poppins', color: '#1B2132'}}>
              Current Room Temperature: 
            </Typography>
          </div>
        </CardContent>
          <div className="temp-display-back">
          <CardMedia
          className={"temperature-display-background"}
          image={require('..//images/temperature_display.png')}
          title="Temperature Display"
          sx={{height: 330, width: 320, objectFit: "fill", marginLeft: 6, marginTop: 3, position: 'relative'}}
        >
          <div>
            <Typography align='center' gutterBottom="true" sx={{fontSize: 72, fontFamily: 'Poppins', color: '#FFFFFF', position: 'relative', transform: 'translate(0%, 100%)'}}>
              24°C
          </Typography>
          </div>
          </CardMedia>
        </div>
        <CardActions>
        </CardActions>
        </StyledCard>
        </Link>
    );
  }
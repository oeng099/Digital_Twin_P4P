import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import './AirQualityModule.css';
import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import firestore from "../firebase/firebase";

  export default function AirQualityModule() {

    const StyledCard = styled(Card)(({ theme }) => ({
      "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
    }))
    
    const [co2, setco2] = useState([]);

    const fetchPost = async () => {
  
        await getDocs(query(collection(firestore,"co2"),orderBy('created','desc')))
        .then((querySnapshot)=>{
          const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id}));
            console.log(newData);
            setco2(Number(newData[0]["co2"]));
        })
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])

    return (
      <Link style={{textDecoration: 'none'}} to={"/airQuality"}>
        <StyledCard className={"air-quality-module-card"} sx={{ width: 400, height: 700,  borderRadius: 5, boxShadow: 5, border: 4, borderColor: "#FFFFFF", backgroundColor: "#F2F4FF"}} >
          <CardContent>
          <div className="module-title">
            <Typography align='center' sx={{fontSize: 48, fontFamily: 'Poppins', color: '#1B2132'}}>
              Air Quality
            </Typography>
          </div>
          <div className="module-text">
          <Typography align='center' sx={{fontSize: 36, fontFamily: 'Poppins', color: '#1B2132'}}>
              Current Room Air Quality (CO2 in PPM): 
            </Typography>
          </div>
        </CardContent>
        <div className="display-container">
          <CardMedia
          className={"air-quality-display-background"}
          image={require('..//images/air_quality_display.png')}
          title="Air QualityDisplay"
          sx={{height: 330, width: 320, objectFit: "fill", marginLeft: 6, marginTop: 3}}
        >
            <div>
            <Typography align='center' gutterBottom="true" sx={{fontSize: 72, fontFamily: 'Poppins', color: '#FFFFFF', position: 'relative', transform: 'translate(0%, 100%)'}}>
              {`${JSON.stringify(co2)}`}
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
import * as React from 'react';
import Card from '@mui/material/Card/index.js';
import CardActions from '@mui/material/CardActions/index.js';
import CardContent from '@mui/material/CardContent/index.js';
import Typography from '@mui/material/Typography/index.js';
import CardMedia from '@mui/material/CardMedia/index.js';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles/index.js';
import './HumidityModule.css';
import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import firestore from "../firebase/firebase.js";

  export default function HumidityModule() {

    const StyledCard = styled(Card)(({ theme }) => ({
      "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
    }));

    const [humidity, setHumidity] = useState([]);

    const fetchPost = async () => {
  
        await getDocs(query(collection(firestore,"humidity"),orderBy("created","desc"),limit(1)))
        .then((querySnapshot)=>{
          const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id}));
            setHumidity(newData[0]["humidity"]);
        })
    }

    useEffect(() => {

      const interval = setInterval(() => {
        fetchPost();
      }, 10000);
  
      return () => clearInterval(interval);
    }, []); // Or [] if effect doesn't need props or state

    return (
      <Link style={{textDecoration: 'none'}} to={"/humidity"}>
        <StyledCard className={"humidity-module-card"} sx={{ width: 400, height: 700,  borderRadius: 5, boxShadow: 5, border: 4, borderColor: "#FFFFFF", backgroundColor: "#F2F4FF" }} >
          <CardContent>
          <div className="module-title">
            <Typography align='center' sx={{fontSize: 48, fontFamily: 'Poppins', color: '#1B2132'}}>
              Humidity
            </Typography>
          </div>
          <div className="module-text">
          <Typography align='center' sx={{fontSize: 36, fontFamily: 'Poppins', color: '#1B2132'}}>
              Current Room Humidity: 
            </Typography>
          </div>
        </CardContent>
        <div className="display-container">
          <CardMedia
          className={"humidity-display-background"}
          image={require('..//images/humidity_display.png')}
          title="Humidity Display"
          sx={{height: 330, width: 320, objectFit: "fill", marginLeft: 6, marginTop: 3}}
        >
          <div>
            <Typography align='center' gutterBottom="true" sx={{fontSize: 72, fontFamily: 'Poppins', color: '#FFFFFF', position: 'relative', transform: 'translate(0%, 100%)'}}>
            {`${JSON.stringify(humidity)}%`}
          </Typography>
          </div>
          </CardMedia>
        </div>
        <CardActions></CardActions>
        <CardActions>
        </CardActions>
        </StyledCard>
        </Link>
    );
  }
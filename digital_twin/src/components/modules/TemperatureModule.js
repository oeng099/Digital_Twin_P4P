import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import './TemperatureModule.css';

  export default function TemperatureModule() {

    const StyledCard = styled(Card)(({ theme }) => ({
      "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
    }))

    return (
        <StyledCard className={"temperature-module-card"} sx={{ width: 400, height: 500,  borderRadius: 5, boxShadow: 5, border: 4, borderColor: "#FFFFFF", backgroundColor: "#9e9e9e" }} >
          <CardContent>
          <div className="module-title">
            <Typography align='center' sx={{fontSize: 30, fontFamily: 'Jeju Hallasan', color: "white"}}>
              Temperature
            </Typography>
          </div>
        </CardContent>
        <CardActions>
        </CardActions>
        </StyledCard>
    );
  }
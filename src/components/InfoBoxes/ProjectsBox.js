import React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import FadeInSection from '../../util/FadeInSection';
import theme from '../../util/ResponsiveFont';
import IslandReservation from '../../imgs/IslandReservation.jpg';

export default function ProjectBox() {
  return (
    <Paper elevation={0} square={true} sx={{ display: "flex", justifyContent: "center", padding: 5, background: "linear-gradient(180deg, rgba(19,39,79,1) 0%, rgba(10,20,41,1) 75%)", color: "white" }}>
      <FadeInSection>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" component="div" sx={{ fontFamily: "Open Sans" }}>
            Projects
          </Typography>
          <Card sx={{ color: "white", background: "#212121", margin: 5, maxWidth: 360 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={IslandReservation}
                alt="Island Reservation"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Island Reservation
                </Typography>
                <Typography variant="body2" color="#bdbdbd">
                  An Airbnb inspired website for uploading and reserving islands.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </ThemeProvider>
      </FadeInSection>
    </Paper>
  );
}
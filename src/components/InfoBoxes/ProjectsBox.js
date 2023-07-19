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
import StockSplunk from '../../imgs/StockSplunk.jpg';
import MugtomeBazar from '../../imgs/MugtomeBazar.jpg';
import ChooseMyMeal from '../../imgs/ChooseMyMeal.jpg'

export default function ProjectBox() {
  return (
    <Paper elevation={0} square={true} sx={{ padding: 3, background: "#161b25", color: "white" }}>
      <hr />
      <FadeInSection>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" component="div" mt={5} sx={{ fontFamily: "Segoe UI", fontWeight: 'medium' }}>
            Projects
          </Typography>
          <hr style={{ marginBottom: "3rem", width: "10%", borderColor: "#27ae60"}}/>
          <Card sx={{ color: "white", background: "#212121", margin: 5, mb: 0, maxWidth: 720}}>
            <CardActionArea target="_blank" rel="noopener noreferrer" href='https://stocksplunk.com'>
              <CardMedia
                component="img"
                height={400}
                image={StockSplunk}
                alt="StockSplunk"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  StockSplunk
                </Typography>
                <Typography variant="head" color="#bdbdbd">
                  A website for simulating long term stock investments. Integrates AlphaVantage API for semi-live stock data.
                  <hr />
                  <strong>Tools:</strong> Angular, Express, MongoDB, Node, Bootstrap.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ color: "white", background: "#212121", margin: 5, mb: 0, maxWidth: 720}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height={400}
                image={ChooseMyMeal}
                alt="Choose My Meal"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Choose My Meal
                </Typography>
                <Typography variant="head" color="#bdbdbd">
                  A simple web app that helps randomly pick a place to eat by integrating Yelp's Fusion API.
                  Great for when your friends are being indecisive on where to eat.
                  <hr />
                  <strong>Tools:</strong> React, Next.js, MUI
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ color: "white", background: "#212121", margin: 5, mb: 0, maxWidth: 720}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height={400}
                image={IslandReservation}
                alt="Island Reservation"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Island Reservation
                </Typography>
                <Typography variant="head" color="#bdbdbd">
                  A website for those looking to rent out their islands, and book other people's islands.
                  <hr />
                  <strong>Tools:</strong> React, Express, MongoDB, Node, Bootstrap.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ color: "white", background: "#212121", margin: 5, mb: 0, maxWidth: 720}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height={400}
                image={MugtomeBazar}
                alt="Mugtome Bazar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mugtome Bazar
                </Typography>
                <Typography variant="head" color="#bdbdbd">
                  A clone of Facebook marketplace with authentication.
                  <hr />
                  <strong>Tools:</strong> PostgreSQL, Express, React, Node.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </ThemeProvider>
      </FadeInSection>
    </Paper>
  );
}
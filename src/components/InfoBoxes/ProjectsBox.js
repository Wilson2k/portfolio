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

export default function ProjectBox() {
  return (
    <Paper elevation={0} square={true} sx={{ display: "flex", justifyContent: "center", padding: 5, background: "linear-gradient(180deg, rgba(19,39,79,1) 0%, rgba(10,20,41,1) 75%)", color: "white" }}>
      <FadeInSection>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" component="div" sx={{ fontFamily: "Open Sans" }}>
            Projects
          </Typography>
          <Card sx={{ color: "white", background: "#212121", margin: 5, mb: 0, maxWidth: 380 }}>
            <CardActionArea target="_blank" rel="noopener noreferrer" href='https://stocksplunk.com'>
              <CardMedia
                component="img"
                height="200"
                image={StockSplunk}
                alt="StockSplunk"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  StockSplunk
                </Typography>
                <Typography variant="body1" color="#bdbdbd">
                  A website for simulating long term stock investments. Integrates AlphaVantage API for semi-live stock data.
                  <hr/>
                  <strong>Tools:</strong> Angular, Express, MongoDB, Node, Bootstrap.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ color: "white", background: "#212121", margin: 5, mb: 0, maxWidth: 380 }}>
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
                <Typography variant="body1" color="#bdbdbd">
                  An Airbnb inspired website for uploading and reserving islands.
                  <hr/>
                  <strong>Tools:</strong> React, Express, MongoDB, Node, Bootstrap.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ color: "white", background: "#212121", margin: 5, mb: 0, maxWidth: 380 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={IslandReservation}
                alt="Island Reservation"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mugtome Bazar
                </Typography>
                <Typography variant="body1" color="#bdbdbd">
                  A clone of Facebook marketplace with authentication.
                  <hr/>
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
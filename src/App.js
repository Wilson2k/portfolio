import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import NavBar from './components/navbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <NavBar/>
        <Grid item xs={12}>
          <Paper square 
            sx={{
              height: "400vh",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              background: "black"
            }}>
            <Fade in={true} timeout={3000}>
              <Paper sx={{padding: 5, background: "transparent", color: "white"}}>
                <Typography variant="h4" component="div">
                  Hello, I'm Wilson
                </Typography>
              </Paper>
            </Fade>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
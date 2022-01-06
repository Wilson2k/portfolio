import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import NavBar from './components/navbar';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import DimensionsProvider from './DimensionsProvider';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <DimensionsProvider>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <NavBar />
          <Grid item xs={12}>
            <Paper square
              sx={{
                height: "400vh",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                background: "black"
              }}>
              <Fade in={true} timeout={6000}>
                <Paper sx={{ padding: 5, background: "transparent", color: "white" }}>
                  <ThemeProvider theme={theme}>
                    <Typography variant="h2" component="div" sx={{ fontFamily: "Montserrat" }}>
                      WILSON CHEN
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontFamily: "Montserrat" }}>
                      Stun Zeed
                    </Typography>
                  </ThemeProvider>
                </Paper>
              </Fade>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </DimensionsProvider>
  );
}

export default App;
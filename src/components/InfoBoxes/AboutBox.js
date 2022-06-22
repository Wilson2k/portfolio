import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import FadeInSection from '../../util/FadeInSection';
import theme from '../../util/ResponsiveFont';

export default function AboutBox() {
  return (
      <Paper square={true} sx={{ padding: 5, background: "linear-gradient(0deg, rgba(19,39,79,1) 0%, rgba(0,100,183,1) 100%)", color: "white"}}>
        <FadeInSection>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" component="div" sx={{ fontFamily: "Open Sans" }}>
            About
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontFamily: "Open Sans" }}>
            I graduated from University of California, Santa Cruz in 2022. I am an aspiring software engineer.
          </Typography>
        </ThemeProvider>
        </FadeInSection>
      </Paper>
  );
}

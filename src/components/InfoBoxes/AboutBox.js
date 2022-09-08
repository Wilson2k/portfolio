import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import FadeInSection from '../../util/FadeInSection';
import theme from '../../util/ResponsiveFont';

export default function AboutBox() {
  return (
    <Paper elevation={0} square={true} sx={{ padding: 5, background: "linear-gradient(0deg, rgba(19,39,79,1) 0%, rgba(0,100,183,1) 100%)", color: "white" }}>
      <FadeInSection>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" component="div" sx={{ fontFamily: "Open Sans" }}>
            About
          </Typography>
          <Typography variant="h4" component="div" sx={{ marginTop: 5, marginInline: "10%", fontFamily: "Open Sans", textAlign: "left" }}>
            I am a full-stack developer working to create clean websites with modern tools like React and Docker. I graduated from the University of California, Santa Cruz in 2022 with a BS in Computer Science.
            I currently work at theCoderSchool in San Francisco, California. At theCoderSchool I teach kids ranging from elementary school to high school how to program. It's also great practice for me as I constantly develop to write better code and create more advanced projects.
          </Typography>
        </ThemeProvider>
      </FadeInSection>
    </Paper>
  );
}

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
          <Typography variant="h5" component="div" sx={{ marginTop: 5, marginInline: "10%", fontFamily: "Open Sans", textAlign: "left" }}>
          I'm a full-stack developer with a passion for creating clean, modern websites with tools like React and Docker. I currently work as a Coding Coach at theCoderSchool, teaching kids the fundamentals of programming in Scratch, Python, and JavaScript. I create personalized lesson plans and continuously recalibrate the curriculum as students progress. As a coach I'm adaptable, logical, and collaborative. The students are my clients, and their projects help us both grow. When I'm not coaching, I'm working hard to develop web apps with new tools and create more advanced personal projects.
          </Typography>
          <Typography variant="h5" component="div" sx={{ marginTop: 5, marginInline: "10%", fontFamily: "Open Sans", textAlign: "left" }}>
          As a recent computer science graduate from the University of California, Santa Cruz, I'm looking for full time software engineering opportunities. Please feel free to browse my website and reach out if you have any questions or would like a copy of my most recent resume or view my personal projects. Thank you.
          </Typography>
        </ThemeProvider>
      </FadeInSection>
    </Paper>
  );
}

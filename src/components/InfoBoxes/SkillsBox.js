import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import FadeInSection from '../../util/FadeInSection';
import theme from '../../util/ResponsiveFont';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

export default function SkillsBox() {
  const skillArray = ["React", "Angular", "NodeJS", "Express", "JavaScript", "Typescript", "Java", "C++", "C", "Python", "PostgreSQL", "HTML", "CSS", "Docker", "AWS"];
  return (
    <Paper square={true} sx={{ padding: 5, background: "linear-gradient(180deg, rgba(10,20,41,1) 0%, rgba(0,0,0,1) 75%)", color: "white" }}>
      <FadeInSection>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" component="div" sx={{ fontFamily: "Open Sans" }}>
            Skills
          </Typography>
          <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{mt: 5}}>
            <Grid item>
            {skillArray.map((skill, index) => (
              <Chip sx={{ml: 1, mr: 1, mt: 1, color: "white", background: "#0d47a1"}} key={index} label={skill} />
            ))}
            </Grid>
          </Grid>
        </ThemeProvider>
      </FadeInSection>
    </Paper>
  );
}
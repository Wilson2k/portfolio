import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import FadeInSection from '../../util/FadeInSection';
import theme from '../../util/ResponsiveFont';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

export default function SkillsBox() {
  const skillArray = ["React", "Angular", "Node", "Express", "JavaScript", "TypeScript", "Java", "C", "Python", "PostgreSQL", "HTML", "CSS", "Docker", "AWS"];
  return (
    <Paper square={true} sx={{ padding: 3, background: "#161b25", color: "white" }}>
      <hr />
      <FadeInSection>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" component="div" mt={5} sx={{ fontFamily: "Segoe UI", fontWeight: 'medium' }}>
            Skills
          </Typography>
          <hr style={{ marginBottom: "3rem", width: "10%", borderColor: "#27ae60"}}/>
          <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{mt: 5}}>
            <Grid item>
            {skillArray.map((skill, index) => (
              <Chip sx={{ml: 1, mr: 1, mt: 1, color: "white", background: "#21262d"}} key={index} label={skill} />
            ))}
            </Grid>
          </Grid>
        </ThemeProvider>
      </FadeInSection>
    </Paper>
  );
}
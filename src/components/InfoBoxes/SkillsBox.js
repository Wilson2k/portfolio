import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import FadeInSection from '../../util/FadeInSection';
import theme from '../../util/ResponsiveFont';

export default function SkillsBox() {
  return (
    <FadeInSection>
      <Paper sx={{ padding: 5, background: "#3d5afe", color: "white" }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" component="div" sx={{ fontFamily: "Montserrat" }}>
            Skills
          </Typography>
        </ThemeProvider>
      </Paper>
    </FadeInSection>
  );
}
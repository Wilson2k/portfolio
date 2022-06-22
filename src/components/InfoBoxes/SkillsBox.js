import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import FadeInSection from '../../util/FadeInSection';
import theme from '../../util/ResponsiveFont';

export default function SkillsBox() {
  return (
    <Paper square={true} sx={{ padding: 5, background: "linear-gradient(180deg, rgba(10,20,41,1) 0%, rgba(0,0,0,1) 75%)", color: "white" }}>
      <FadeInSection>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" component="div" sx={{ fontFamily: "Open Sans" }}>
            Skills
          </Typography>
        </ThemeProvider>
      </FadeInSection>
    </Paper>
  );
}
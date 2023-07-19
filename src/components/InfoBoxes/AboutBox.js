import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import FadeInSection from '../../util/FadeInSection';
import theme from '../../util/ResponsiveFont';
import Avatar from '@mui/material/Avatar';
// Import headshot photo
import Headshot from '../../imgs/WC.jpg';

export default function AboutBox() {
  return (
    <Paper elevation={0} square={true} sx={{ padding: 3, background: "#161b25", color: "white" }}>
      <hr />
      <FadeInSection>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" component="div" mt={5} sx={{ fontFamily: "Segoe UI", fontWeight: 'medium' }}>
            About
          </Typography>
          <hr style={{ marginBottom: "3rem", width: "10%", borderColor: "#27ae60" }} />
          <Avatar
            alt="Wilson Chen"
            src={Headshot}
            sx={{ width: 325, height: 325, display: 'inline-block' }}
          />
          <Paper elevation={0} square={true} sx={{ display: 'flex', justifyContent: 'center', background: "#161b25", color: "white" }}>
            <Typography component="div" sx={{ marginTop: 5, marginInline: "20%", fontFamily: "Segoe UI", textAlign: "left", fontSize: 20 }}>
              <p>Hello, my name is Wilson. I am a solutions oriented full-stack developer that is passionate about learning and growing as a developer.</p>
              <p>I currently work as a Coding Coach at The CoderSchool, teaching students the fundamentals of programming in Python, JavaScript, and HTML/CSS.
                As a coach I'm adaptable, logical, and collaborative. The students are my clients, and teaching them how to program helps us both grow.
              </p>
              <p>When I'm not coaching, I'm working hard to create web apps with new tools and expand my skill set as a developer.</p>
            </Typography>
          </Paper>
        </ThemeProvider>
      </FadeInSection>
    </Paper>
  );
}

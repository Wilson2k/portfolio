import React, { useRef } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import NavBar from './NavBar';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import DimensionsProvider from '../util/DimensionsProvider';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../util/ResponsiveFont';
// Import info sections of page
import AboutBox from './InfoBoxes/AboutBox';
import ContactBox from './InfoBoxes/ContactBox';
import ProjectBox from './InfoBoxes/ProjectsBox';
import SkillsBox from './InfoBoxes/SkillsBox';
import Typewriter from 'typewriter-effect';


// Function that creates a state for scrolling to a section of page
const useScroll = () => {
  const elementRef = useRef();
  const executeScroll = () => elementRef.current.scrollIntoView();
  return [executeScroll, elementRef];
};

function MainPage() {
  // React states for scrolling to sections of page
  const [aboutScroll, aboutRef] = useScroll();
  const [projScroll, projRef] = useScroll();
  const [skillScroll, skillRef] = useScroll();
  const [contactScroll, contactRef] = useScroll();
  // Function for button at bottom of page that scrolls to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <DimensionsProvider>
      <Box sx={{ display: 'flex', margin: 0, padding: 0, justifyContent: 'center' }}>
        <Grid item xs={12}>
          <Paper
            square={true}
            elevation={0}
            sx={{
              textAlign: "center",
              background: "#161b25",
            }}>
            <NavBar scrollArray={[aboutScroll, projScroll, skillScroll, contactScroll]}/>
            <Paper elevation={0} square sx={{ display: "flex", justifyContent: "center", background: "#161b25", height: "95vh" }}>
              <ThemeProvider theme={theme}>
                <Paper elevation={0} sx={{ alignSelf: "center", textAlign: 'center', background: "transparent", marginTop: 10, color: "white" }}>
                  <Typography variant="h2" component="div" sx={{ fontFamily: "Segoe UI", textAlign: "center", fontWeight: 'medium' }}>
                    Wilson Chen
                  </Typography>
                  <Typography variant="h2" component="div" sx={{ fontFamily: "Segoe UI", justifyContent: 'center', fontWeight: 'medium', display: 'flex', flexFlow: 'row', flexWrap: 'wrap' }}>
                    I am a{'\u00A0'}
                    <Typewriter
                      sx={{ display: 'inline' }}
                      options={{
                        strings: [
                          '<span style="color: #27ae60;">Software Engineer</span>',
                          '<span style="color: #27ae60;">Web Developer</span>',
                          '<span style="color: #27ae60;">Teacher</span>',
                          '<span style="color: #27ae60;">Learner</span>',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        pauseFor: 1500
                      }}
                    >
                    </Typewriter>
                  </Typography>
                </Paper>
              </ThemeProvider>
            </Paper>
            <div ref={aboutRef}>
              <AboutBox />
            </div>
            <div ref={projRef}>
              <ProjectBox />
            </div>
            <div ref={skillRef}>
              <SkillsBox />
            </div>
            <div>
              <Paper square={true} sx={{ padding: 0, background: "#161b25" }}>
                <IconButton
                  sx={{
                    ':hover': { backgroundColor: '#424242' },
                    color: "white",
                    position: 'flex',
                    mb: 2
                  }}
                  onClick={scrollToTop}
                >
                  <KeyboardArrowUpIcon />
                </IconButton>
              </Paper>
            </div>
            <div ref={contactRef}>
              <ContactBox />
            </div>
          </Paper>
        </Grid>
      </Box >
    </DimensionsProvider >
  );
}

export default MainPage;
import React, { useRef, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import NavBar from './components/NavBar';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import DimensionsProvider from './util/DimensionsProvider';
import { ThemeProvider } from '@mui/material/styles';
import theme from './util/ResponsiveFont';
// Import info sections of page
import AboutBox from './components/InfoBoxes/AboutBox';
import ContactBox from './components/InfoBoxes/ContactBox';
import EducationBox from './components/InfoBoxes/EducationBox';
import ProjectBox from './components/InfoBoxes/ProjectsBox';
import SkillsBox from './components/InfoBoxes/SkillsBox';


// Function that creates a state for scrolling to a section of page
const useScroll = () => {
  const elementRef = useRef();
  const executeScroll = () => elementRef.current.scrollIntoView();
  return [executeScroll, elementRef];
};

function App() {
  // React states for scrolling to sections of page
  const [aboutScroll, aboutRef] = useScroll();
  const [projScroll, projRef] = useScroll();
  const [eduScroll, eduRef] = useScroll();
  const [skillScroll, skillRef] = useScroll();
  const [contactScroll, contactRef] = useScroll();
  const scrollToTop = () => {
    window.scrollTo(0,0);
  };
  // Scroll to top of page on refresh
  useEffect(() => {
    window.scrollTo(0,0);
  });
  return (
    <DimensionsProvider>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <NavBar scrollArray={[aboutScroll, projScroll, eduScroll, skillScroll, contactScroll]}/>
          <Grid item xs={12}>
            <Paper square
              sx={{
                textAlign: "center",
                background: "black",
              }}>
              <Fade in={true} timeout={6000}>
                <Paper sx={{ paddingTop: 5, background: "transparent", color: "white", height: "125vh" }}>
                  <ThemeProvider theme={theme}>
                    <Typography variant="h2" component="div" sx={{ fontFamily: "Montserrat" }}>
                      WILSON CHEN
                    </Typography>
                  </ThemeProvider>
                </Paper>
              </Fade>
              <div ref={aboutRef}>
                <AboutBox />
              </div>
              <div ref={projRef}>
                <ProjectBox />
              </div>
              <div ref={eduRef}>
                <EducationBox />
              </div>
              <div ref={skillRef}>
                <SkillsBox />
              </div>
              <div ref={contactRef}>
                <ContactBox />
              </div>
              <IconButton
                sx={{ ':hover': { backgroundColor: '#424242' },
                color: "white",
                position: 'flex',
                bottom: 0
                }}
                onClick={scrollToTop}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </DimensionsProvider>
  );
}

export default App;
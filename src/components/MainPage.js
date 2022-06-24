import React, { useRef } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import NavBar from './NavBar';
import Avatar from '@mui/material/Avatar';
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
    window.scrollTo(0,0);
  };
  return (
    <DimensionsProvider>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <NavBar scrollArray={[aboutScroll, projScroll, skillScroll, contactScroll]}/>
          <Grid item xs={12}>
            <Paper square
              sx={{
                textAlign: "center",
                background: "black",
              }}>
              <Fade in={true}>
                <Paper elevation={0} square sx={{ display: "flex", justifyContent: "center", paddingLeft: 10, paddingRight: 10, paddingTop: 10, background: "linear-gradient(180deg, rgba(0,0,0,1) 15%, rgba(0,100,183,1) 100%)", color: "white", height: "100vh" }}>
                  <ThemeProvider theme={theme}>
                      <Typography variant="h2" component="div" sx={{ fontFamily: "Open Sans", alignSelf: "start" }}>
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .pauseFor(2500)
                            .typeString('Hello!')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('I\'m Wilson, an aspiring software engineer from San Francisco.')
                            .pauseFor(2000)
                            .callFunction(() => {
                              document.querySelectorAll(".Typewriter__cursor")[0].style.display = "none";
                            })
                            .start();
                        }}
                      />
                      </Typography>
                      <Paper elevation={0} sx={{position: 'absolute', alignSelf: "center", background: "transparent"}}>
                      <Avatar
                        alt="Wilson Chen"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 300, height: 300, border: "0.5px solid black" }}
                      />
                      </Paper>
                  </ThemeProvider>
                </Paper>
              </Fade>
              <div ref={aboutRef}>
                <AboutBox />
              </div>
              <div ref={projRef}>
                <ProjectBox />
              </div>
              <div ref={skillRef}>
                <SkillsBox />
              </div>
              <IconButton
                sx={{ ':hover': { backgroundColor: '#424242' },
                color: "white",
                position: 'flex',
                margin: 1
                }}
                onClick={scrollToTop}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
              <div ref={contactRef}>
                <ContactBox />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </DimensionsProvider>
  );
}

export default MainPage;
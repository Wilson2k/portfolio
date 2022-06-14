import React, { useRef, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import NavBar from './components/NavBar';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import DimensionsProvider from './util/DimensionsProvider';
import FadeInBox from './util/FadeInSection';

let theme = createTheme();
theme = responsiveFontSizes(theme);

// Function that creates a state for scrolling to a section of page
const useScroll = () => {
  const elementRef = useRef();
  const executeScroll = () => elementRef.current.scrollIntoView();
  return [executeScroll, elementRef];
};

function App() {
  // React states for scrolling to sections of page
  const [aboutScroll, aboutRef] = useScroll();
  const [expScrolll, expRef] = useScroll();
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
          <NavBar scrollArray={[aboutScroll, expScrolll, projScroll, eduScroll, skillScroll, contactScroll]}/>
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
                    <Typography variant="h3" component="div" sx={{ fontFamily: "Montserrat" }}>
                      Stun Zeed
                    </Typography>
                  </ThemeProvider>
                </Paper>
              </Fade>
              <div ref={aboutRef}>
                <FadeInBox>
                  <Paper sx={{ padding: 5, background: "#3d5afe", color: "white" }}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h2" component="div" sx={{ fontFamily: "Montserrat" }}>
                        About
                      </Typography>
                    </ThemeProvider>
                  </Paper>
                </FadeInBox>
              </div>
              <div ref={expRef}>
                <FadeInBox>
                  <Paper sx={{ padding: 5, background: "#3d5afe", color: "white" }}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h2" component="div" sx={{ fontFamily: "Montserrat" }}>
                        Experience
                      </Typography>
                    </ThemeProvider>
                  </Paper>
                </FadeInBox>
              </div>
              <div ref={projRef}>
                <FadeInBox>
                  <Paper sx={{ padding: 5, background: "#3d5afe", color: "white" }}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h2" component="div" sx={{ fontFamily: "Montserrat" }}>
                        Projects
                      </Typography>
                    </ThemeProvider>
                  </Paper>
                </FadeInBox>
              </div>
              <div ref={eduRef}>
                <FadeInBox>
                  <Paper sx={{ padding: 5, background: "#3d5afe", color: "white" }}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h2" component="div" sx={{ fontFamily: "Montserrat" }}>
                        Education
                      </Typography>
                    </ThemeProvider>
                  </Paper>
                </FadeInBox>
              </div>
              <div ref={skillRef}>
                <FadeInBox>
                  <Paper sx={{ padding: 5, background: "#3d5afe", color: "white" }}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h2" component="div" sx={{ fontFamily: "Montserrat" }}>
                        Skills
                      </Typography>
                    </ThemeProvider>
                  </Paper>
                </FadeInBox>
              </div>
              <div ref={contactRef}>
                <FadeInBox>
                  <Paper sx={{ padding: 5, background: "#3d5afe", color: "white" }}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h2" component="div" sx={{ fontFamily: "Montserrat" }}>
                        Contact
                      </Typography>
                    </ThemeProvider>
                  </Paper>
                </FadeInBox>
              </div>
              <IconButton
                sx={{
                ':hover': {
                  backgroundColor: '#424242',
                },
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
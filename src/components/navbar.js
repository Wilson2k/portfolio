import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import FolderIcon from '@material-ui/icons/Folder';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDimensions } from '../util/DimensionsProvider';
import { ListItemIcon, Slide } from '@mui/material';
import Typography from '@mui/material/Typography';
import WLogo from '../assets/WLogo.png'

export default function NavBar(props) {
  const [scrollDown, setScrollDown] = useState(true);
  const [scrollPos, setScrollPos] = useState(0)
  const [navSlideIn, setNavSlide] = useState(true)
  const navButtons = ["About", "Projects", "Skills", "Contact"];
  const navIcons = [<PersonIcon />, <FolderIcon />, <AccountTreeIcon />, <EmailIcon />];
  const { width } = useDimensions();
  const wide = (width > 750 ? true : false);
  const [open, setOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleNavSlideIn = () => {
    setNavSlide(false);
  };
  const handleNavSlideOut = () => {
    setNavSlide(true);
  };
  const handleIconClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setOpen(false);
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDown = () => {
      if (Math.abs(window.scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDown(window.scrollY > lastScrollY ? true : false);
      setScrollPos(window.scrollY);
      lastScrollY = window.scrollY > 0 ? window.scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDown);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [wide, scrollDown]);
  return (
    <Box >
      <Slide direction="down" in={!scrollDown || scrollPos === 0} mountOnEnter unmountOnExit onExit={handleNavSlideOut} onEntered={handleNavSlideIn} timeout={500}>
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: "black", borderBottom: "solid gray 1px" }}>
          {wide &&
            <Toolbar sx={{ justifyContent: "left", width: "100%",
            maxWidth: 1440,
            mx: "auto"}}>
              {navButtons.map((label, index) => (
                <Button
                  key={index}
                  onClick={props.scrollArray[index]}
                  color="inherit"
                  sx={{
                    ':hover': { bgcolor: 'white', color: 'black' },
                    margin: 2,
                    fontFamily: "Segoe UI"
                  }}>
                  {label}
                </Button>
              ))}
              <Typography component="div" sx={{ flexGrow: 1 }} />
              <Button onClick={scrollToTop}
                sx={{
                  ':hover': { color: 'black', bgcolor: '#424242' },
                  color: "white",
                }}>
                <img
                  alt="Logo"
                  src={WLogo}
                  sx={{ width: 48, height: 48 }}
                />
              </Button>
            </Toolbar>
          }
          {!wide &&
            <Toolbar sx={{ justifyContent: "left" }}>
              <IconButton
                sx={{
                  ':hover': { backgroundColor: '#424242' },
                  color: "white",
                }}
                edge='start'
                onClick={handleIconClick}
              >
                <MenuIcon />
              </IconButton>
              <Typography component="div" sx={{ flexGrow: 1 }} />
              <Button onClick={scrollToTop} disabled={navSlideIn}
                sx={{
                  ':hover': { color: 'black', bgcolor: '#424242' },
                  color: "white",
                }}>
                <img
                  alt="Logo"
                  src={WLogo}
                  sx={{ width: 48, height: 48 }}
                />
              </Button>
            </Toolbar>
          }
        </AppBar>
      </Slide>
      <Drawer
        variant='temporary'
        anchor='left'
        open={open}
        PaperProps={{ sx: { width: "70%" }, }}
        ModalProps={{ disableScrollLock: true }}
      >
        <Box sx={{ flexGrow: 1, bgcolor: "black", height: "100vh", px: 2 }}>
          <ListItem sx={{ justifyContent: "right" }}>
            <IconButton
              sx={{
                ':hover': { bgcolor: 'white', color: 'black' },
                color: "white",
              }}
              onClick={handleIconClick}
            >
              <CloseIcon fontSize='large' />
            </IconButton>
          </ListItem>
          {navButtons.map((label, index) => (
            <ListItem
              key={index}
              onClick={props.scrollArray[index]}
              onClickCapture={handleIconClick}
              sx={{
                ':hover': { backgroundColor: '#424242' },
                borderRadius: 1,
              }}>
              <ListItemIcon sx={{ color: "white" }}>
                {navIcons[index]}
              </ListItemIcon>
              <ListItemText
                sx={{ color: "white", my: 2 }}
                primaryTypographyProps={{
                  variant: 'h5',
                  fontWeight: 'small',
                  fontFamily: 'Segoe UI'
                }}
                primary={label} />
            </ListItem>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}

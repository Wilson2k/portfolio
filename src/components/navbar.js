import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDimensions } from '../util/DimensionsProvider';

export default function NavBar(props) {
  const navButtons = ["About", "Projects", "Skills", "Contact"];
  const { width } = useDimensions();
  const wide = (width > 750 ? true : false);
  const [open, setOpen] = useState(false);
  const handleIconClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setOpen(false);
  }, [wide] );
  if (wide) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "black", borderBottom: "solid gray 1px" }}>
          <Grow in={true} timeout={2000} unmountOnExit>
            <Toolbar sx={{ justifyContent: "center" }}>
              {navButtons.map((label, index) => (
                <Button
                  key={index}
                  onClick={props.scrollArray[index]}
                  color="inherit"
                  sx={{ 
                    ':hover': { bgcolor: 'white', color: 'black'},
                    margin: 2
                  }}>
                  {label}
                </Button>
              ))}
            </Toolbar>
          </Grow>
        </AppBar>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: "black", borderBottom: "solid gray 1px"  }}>
          <Grow in={true} timeout={2000} unmountOnExit>
            <Toolbar position="fixed" sx={{ justifyContent: "left" }}>
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
            </Toolbar>
          </Grow>
        </AppBar>
        <Toolbar position="fixed" sx={{ bgcolor: "black" }} />
        <Drawer
            variant='temporary'
            anchor='top'
            open={open}
            sx={{ background: 'black'}}
          >
            <Box sx={{ flexGrow: 1, bgcolor: "black", height: "100vh", borderBottom: "solid gray 1px", px: 2 }}>
              <ListItem sx={{ justifyContent: "right" }}>
                <IconButton
                  sx={{ 
                    ':hover': { backgroundColor: '#424242' },
                    color: "white",
                  }}
                  onClick={handleIconClick}
                >
                  <CloseIcon />
                </IconButton>
              </ListItem>
              {navButtons.map((label, index) => (
                <ListItem 
                  button 
                  key={index}
                  onClick={props.scrollArray[index]}
                  onClickCapture={handleIconClick}
                  sx={{
                    ':hover': { backgroundColor: '#424242' },
                    borderRadius: 4,
                  }}>
                  <ListItemText
                    sx={{ color: "white", textAlign: "center", my: 2 }}
                    primaryTypographyProps={{
                      variant: 'h5',
                      fontWeight: 'medium',
                    }}
                    primary={label} />
                </ListItem>
              ))}
            </Box>
          </Drawer>
      </Box>
    );
  }
}

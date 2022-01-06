import React, { createContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useDimensions } from '../DimensionsProvider';

export const NavContext = createContext();

export default function NavBar() {
  const navButtons = ["About", "Experience", "Projects", "Education", "Skills", "Contact"];
  const { width } = useDimensions();
  const wide = (width > 750 ? true : false);
  const [open, setOpen] = React.useState(false);
  const handleIconClick = () => {
    setOpen(!open);
  };
  if (wide) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "black", borderBottom: "solid gray 1px" }}>
          <Grow in={true} timeout={2000} unmountOnExit>
            <Toolbar sx={{ justifyContent: "center" }}>
              {navButtons.map((label, index) => (
                <Button
                  key={index}
                  color="inherit"
                  sx={{
                    ':hover': {
                      bgcolor: 'white',
                      color: 'black',
                    },
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
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: "transparent" }}>
          <Toolbar position="fixed" sx={{ justifyContent: "left" }}>
            <IconButton
              color='inherit'
              edge='start'
              onClick={handleIconClick}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <NavContext.Provider value={{ open, handleIconClick }}>
          <NavPopover />
        </NavContext.Provider>
      </Box>
    );
  }
}

function NavPopover() {
  const { width } = useDimensions();
  const wide = (width > 750 ? true : false);
  if (!wide) {
    return (
      <NavContext.Consumer>
        {({ open, handleIconClick }) => (
          <Drawer
            variant='temporary'
            anchor='top'
            open={open}
          >
            <Paper square
              sx={{
                height: "100vh",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                background: "black",
              }}>
              <List>
                <ListItem button={true} onClick={handleIconClick}>
                  <ListItemText primary={'Close'} />
                </ListItem>
                <ListItem button={true}>
                  <ListItemText primary={'About'} />
                </ListItem>
                <ListItem button={true}>
                  <ListItemText primary={'Experience'} />
                </ListItem>
              </List>
            </Paper>
          </Drawer>
        )}
      </NavContext.Consumer>
    );
  }
}
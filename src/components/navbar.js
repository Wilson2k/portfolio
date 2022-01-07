import React, { createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { useDimensions } from '../DimensionsProvider';

export const NavContext = createContext();

const useStyles = makeStyles({
  paper: {
    background: "black"
  }
});

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
        <Toolbar position="fixed" sx={{ bgcolor: "black" }} />
        <NavContext.Provider value={{ open, handleIconClick, navButtons }}>
          <NavPopover />
        </NavContext.Provider>
      </Box>
    );
  }
}

function NavPopover() {
  const classes = useStyles();
  const { width } = useDimensions();
  const wide = (width > 750 ? true : false);
  if (!wide) {
    return (
      <NavContext.Consumer>
        {({ open, handleIconClick, navButtons }) => (
          <Drawer
            variant='temporary'
            anchor='top'
            open={open}
            className={classes.paper}
          >
            <Box sx={{ flexGrow: 1, bgcolor: "black", height: "100vh", borderBottom: "solid gray 1px", px: 2 }}>
              <ListItem button onClick={handleIconClick} sx={{ justifyContent: "right" }}>
                <IconButton
                  sx={{ color: "white" }}
                  onClick={handleIconClick}
                >
                  <CloseIcon />
                </IconButton>
              </ListItem>
              {navButtons.map((label, index) => (
                <ListItem button key={index}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#424242',
                    },
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
        )}
      </NavContext.Consumer>
    );
  }
}
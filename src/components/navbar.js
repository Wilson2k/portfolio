import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{bgcolor: "black", borderBottom: "solid gray 1px"}}>
            <Toolbar sx={{justifyContent: "center"}}>
                <Button color="inherit" 
                    sx={{
                        ':hover': {
                            bgcolor: 'white',
                            color: 'black',
                    }}}>About</Button>
                <Button color="inherit"
                    sx={{
                        ':hover': {
                            bgcolor: 'white',
                            color: 'black',
                    }}}>Projects</Button>
                <Button color="inherit"
                    sx={{
                        ':hover': {
                            bgcolor: 'white',
                            color: 'black',
                    }}}>Contact</Button>
            </Toolbar>
        </AppBar>
    </Box>
  );
}
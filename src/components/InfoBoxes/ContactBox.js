import React from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../util/ResponsiveFont';
import IconButton from '@mui/material/IconButton';
import { GitHub } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { Mail } from '@material-ui/icons';

export default function ContactBox() {
  return (
    <Paper square={true} sx={{ borderTop: "1px solid grey", padding: 2, background: "black", color: "white" }}>
        <ThemeProvider theme={theme}>
          <IconButton aria-label="GitHub" color="primary">
            <GitHub />
          </IconButton>
          <IconButton aria-label="GitHub" color="primary">
            <LinkedIn />
          </IconButton>
          <IconButton aria-label="GitHub" color="primary">
            <Mail />
          </IconButton>
        </ThemeProvider>
    </Paper>
  );
}
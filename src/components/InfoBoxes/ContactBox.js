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
    <Paper square={true} sx={{ borderTop: "1px solid #30363d", padding: 2, background: "#161b25", color: "white" }}>
        <ThemeProvider theme={theme}>
          <IconButton aria-label="GitHub" sx={{color: '#27ae60'}}  target="_blank" rel="noopener noreferrer" href="https://github.com/Wilson2k">
            <GitHub />
          </IconButton>
          <IconButton aria-label="LinkedIn" sx={{color: '#27ae60'}}  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/wilsonchen2000/">
            <LinkedIn />
          </IconButton>
          <IconButton aria-label="Email" sx={{color: '#27ae60'}} target="_blank" rel="noopener noreferrer" href="mailto:wilsonchen819@gmail.com">
            <Mail />
          </IconButton>
        </ThemeProvider>
    </Paper>
  );
}
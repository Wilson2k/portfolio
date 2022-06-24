import React from 'react';
import LoadingW from '../assets/LoadingW.gif';
import Paper from '@mui/material/Paper';

function LoadingPage() {
  return (
    <Paper square sx={{ background: "black", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div>
      <img src={LoadingW} height='200' alt='LoadingIconW'/>
      </div>
    </Paper>
  );
}

export default LoadingPage;
import React, { useEffect, useState } from 'react';
import MainPage from './components/MainPage';
import LoadingPage from './components/LoadingPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0,0);
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);
  return isLoading ?
    <LoadingPage />:
    <MainPage /> 
}

export default App;
import React, { useEffect, useState } from 'react';
import MainPage from './components/MainPage';
import LoadingPage from './components/LoadingPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Scroll to top on refresh
    window.scrollTo(0,0);
    // Wait for 3 seconds before displaying page
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return isLoading ?
    <LoadingPage /> :
    <MainPage /> 
}

export default App;
import React, { useEffect, useState } from 'react';
import MainPage from './components/MainPage';
import LoadingPage from './components/LoadingPage';

// Function that gets random int in range
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Scroll to top on refresh
    window.scrollTo(0,0);
    // Wait for for 1.5-2 seconds before displaying page
    // Give psuedo random loading time effect
    setTimeout(() => {
      setIsLoading(false);
    }, getRandomIntInclusive(1500, 2000));
  }, []);
  return isLoading ?
    <LoadingPage /> :
    <MainPage /> 
}

export default App;
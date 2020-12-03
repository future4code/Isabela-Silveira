import React from 'react';
import Router from './router/Router'
import './App.css';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';


function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Router /> 
    </ThemeProvider>

  ) 

}

export default App;

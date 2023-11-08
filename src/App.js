import './App.css';
import AppState from './context/App/AppState';
import Main from './components/Main';
import React, { useState } from 'react';




const App = () => {
  return (
    <>
      <AppState>
        <Main>
          
        </Main>
      </AppState>
        
    </>
  );
}

export default App;

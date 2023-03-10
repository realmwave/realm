import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import Navigation from "./navigations/Navigation";

import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
      </div>
    </BrowserRouter>
  )
};


export default App;


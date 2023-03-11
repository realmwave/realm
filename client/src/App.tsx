import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

import auth from "./firebase/firebase";
//import {  }

import AppNavigation from './navigations/AppNavigation';
import AuthNavigation from './navigations/AuthNavigation';

import './App.scss';


function App() {
  const [currentUser, setCurrentUser] = useState<null | object | undefined>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(undefined)
      }
    })

    return () => {}
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        {currentUser ? <AppNavigation /> : <AuthNavigation />}
      </div>
    </BrowserRouter>
  )
};


export default App;


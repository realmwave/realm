import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { Provider } from 'react-redux';

import store from './store/store';
import auth from "./firebase/firebase";
//import {  }

import Navigation from './navigations';
import AppNavigation from './navigations/AppNavigation';
import AuthNavigation from './navigations/AuthNavigation';

import './App.scss';


function App() {
  const [currentUser, setCurrentUser] = useState<null | object | undefined>(null)


  //useEffect(() => {
  //  onAuthStateChanged(auth, (user) => {
  //    if (user) {
  //      setCurrentUser(user)
  //    } else {
  //      setCurrentUser(undefined)
  //    }
  //  })

  //  return () => {}
  //}, [])

  return (
    <BrowserRouter>
      <Provider store={store} >
        <div className="App">
          <Navigation />
        </div>
      </Provider>
    </BrowserRouter>
  )
};


export default App;


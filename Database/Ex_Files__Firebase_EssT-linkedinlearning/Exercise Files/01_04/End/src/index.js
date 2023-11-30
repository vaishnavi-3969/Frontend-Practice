import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import './index.css';
import { App, serviceWorker } from './app';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

var firebaseConfig = {
  apiKey: "AIzaSyC-_3VqcHq-SAMcFiFKwpCZS0rtOY8-olk",
  authDomain: "resto-reservations-ll.firebaseapp.com",
  projectId: "resto-reservations-ll",
  storageBucket: "resto-reservations-ll.appspot.com",
  messagingSenderId: "433322574109",
  appId: "1:433322574109:web:75889d45ad4a1b3d10a1f4",
  measurementId: "G-QRDRTV3Q19"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

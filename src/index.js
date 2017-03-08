import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyDKC1F6qEzZKmhGFsakl2luIb_ikIrF6BM",
  authDomain: "pseudogram-3e601.firebaseapp.com",
  databaseURL: "https://pseudogram-3e601.firebaseio.com",
  storageBucket: "pseudogram-3e601.appspot.com",
  messagingSenderId: "891889595498"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

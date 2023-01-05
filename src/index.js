import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "./footer/Footer.js"

// from old file
import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <button>hello!</button>
    <Footer />
  </React.StrictMode>
);

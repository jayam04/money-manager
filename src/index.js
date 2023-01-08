import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "./components/footer.js";

// from old file
import './index.sass';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <button className='mdc-button'>
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__touch"></span>
    <span className='mdc-button__focus-ring'></span>
      hello
    </button>
    <Footer />
  </React.StrictMode>
);

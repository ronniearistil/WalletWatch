// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Your global CSS or styles
import App from './App'; // Import the root App component

// Renders the App component into the DOM, specifically the <div id="root"> in public/index.html
ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Renders the App component */}
  </React.StrictMode>,
  document.getElementById('root')  // Selects the "root" div from the public/index.html file
);
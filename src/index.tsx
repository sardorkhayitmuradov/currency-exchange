import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "currency-flags/dist/currency-flags.min.css"
import './App.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

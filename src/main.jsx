import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import Store from './Redux/CartStore';
import App from './app';

// Uncomment StrictMode for development
createRoot(document.getElementById('root')).render(
  <Provider store ={Store}>
    <App />
  </Provider>
);

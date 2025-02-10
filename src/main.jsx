import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app';
import { Provider } from 'react-redux';
import Store from './Redux/CartStore';

// Uncomment StrictMode for development
createRoot(document.getElementById('root')).render(
  <Provider store ={Store}>
    <App />
  </Provider>
);

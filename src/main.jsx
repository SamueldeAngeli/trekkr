import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './conteiners/Home/Home';
import { Login } from './conteiners/Login/Login';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

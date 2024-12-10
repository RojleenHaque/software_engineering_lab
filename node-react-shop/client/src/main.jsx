import React from 'react'
import ReactDOM from 'react-dom/client';
//import { createRoot } from 'react./-dom/client'
import App from './App.jsx';
//import './index.css'; here is tailwind css
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

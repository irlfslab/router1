import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from "react-dom/client";
import { BrowserRouter} from 'react-router';
import './index.css'
import App from './App.jsx'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render (
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './App';

const form = ReactDOM.createRoot(document.getElementById('form'));
form.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);


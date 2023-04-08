import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import History from './History';
import "./spinner.css";
import ErrorPage from './ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/> 
        <Route path='history' element={<History />} />
         <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
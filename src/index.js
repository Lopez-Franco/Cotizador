import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import History from './components/History';
import ErrorPage from './components/ErrorPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<App />}/> 
        <Route path='history' element={<History />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App'
import {About, PortfoliosPage, Contact} from './pages'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
          <Route path='/' exact element={<App/>} />
          <Route path='/Dev.Legals' element={<App/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/portfolios' element={<PortfoliosPage/>} />
          <Route path='/contact' element={<Contact/>} />
      </Routes>
  </Router>
);

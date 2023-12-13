// React Imports
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Imports
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import PricesAndCharges from './components/pages/PricesAndCharges';
import TermsAndConditions from './components/pages/TermsAndConditions';

// Component Imports
import { MainNavigation, SecNavigation, ThirdNavigation, SideNavigation } from './components/widgets/Navigations';
import Certificates from './components/widgets/Certificates';
import Available from './components/widgets/Available';

// Style Import
import '../src/css/App.css';

// Image Imports
import cookie from '../src/img/cookie.png';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <SideNavigation />

        <div id='cookie-box'>
          <img src={cookie}></img>
        </div>

        <header>
          <SecNavigation />
          <MainNavigation />
        </header>

        <main>
          <Routes>
            <Route path='*' element={<div>Requested Page Not Found</div>} />
            <Route path='/' element={<Home />} />
            <Route path='/prices-and-charges' element={<PricesAndCharges />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <Certificates />
          <ThirdNavigation />
        </footer>
      </div>
    </Router>
  )
}

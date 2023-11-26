// React Imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Page Imports
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Prices from './components/Pages/Prices';
import Terms from './components/Pages/Terms';
// Component Imports
import { MainNavigation, SecNavigation, ThirdNavigation, SideNavigation } from './components/Navigations';
// Style Import
import './css/App.css';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <SideNavigation />

        <header>
          <SecNavigation />
          {!false && <MainNavigation />}
        </header>

        <main>
          <Routes>
            <Route path='*' element={<div>Requested Page Not Found</div>} />
            <Route path='/' element={<Home />} />
            <Route path='/prices-and-charges' element={<Prices />} />
            <Route path='/terms-and-conditions' element={<Terms />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>

        <footer>
          {false && <ThirdNavigation />}
        </footer>
      </div>
    </Router>
  )
}

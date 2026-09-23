//Importing the react packages for routing.
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

//Importing all of the components to form a cohesive website.
import ScrollToTop from './componenets/effects/ScrollToTop.jsx';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import ContactPage from './pages/ContactPage.jsx';
import BlogPage from './pages/BlogPage.jsx';

export default function App() {  
  return (
    <>    
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
    </>
  )
}

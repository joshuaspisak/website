import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation.js';
import products from './data/products.js';
import IndexPage from './pages/IndexPage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffListPage from './pages/StaffListPage.js';
import OrderPage from './pages/OrderPage.js';
import VolunteeringLogPage from './pages/VolunteeringLogPage';
import CreateVolunteeringPage from './pages/CreateVolunteeringPage';
import EditVolunteeringPage from './pages/EditVolunteeringPage';
import WritingPage from './pages/WritingPage';

import './Application.css';

function Application() {
  const [volunteering, makeVolunteering] = useState([]);
  return (
    <div className="Application">
      <BrowserRouter>

        <header className="Application-header-content">
          <h1>Joshua Spisak Website
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Navigation />

        <main>
          <section className="Application-article-content">
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/gallery" element={<GalleryPage />} /> 
                <Route path="/order" element={<OrderPage productContent={products}/>} /> 
                <Route path="/stafflist" element={<StaffListPage />} /> 
                <Route path="/volunteering" element={<VolunteeringLogPage makeOneVolunteering={makeVolunteering}/>} /> 
                <Route path="/create-volunteering" element={<CreateVolunteeringPage />} /> 
                <Route path="/change" element={<EditVolunteeringPage volunteering={volunteering}/>} />
                <Route path="/writing" element={<WritingPage />} />

            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023 Joshua Spisak</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default Application;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';   
import './App.css';

// Simple placeholder pages
const PropertySearch = () => <h2>Property Search Page</h2>;
const PropertyList = () => <h2>Property List Page</h2>;

function App() {
  return (  
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PropertySearch />} />
        <Route path="/property-list" element={<PropertyList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

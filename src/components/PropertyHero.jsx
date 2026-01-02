import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './PropertyHero.css';

export default function PropertyHero({ onSearch }) {
  const [activeTab, setActiveTab] = useState('buy');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery, activeTab);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="property-hero">
      {/* Background Image */}
      <div className="property-hero__background" />
      
      {/* Content */}
      <div className="property-hero__content">
        {/* Heading */}
        <div className="property-hero__heading">
          <h1 className="property-hero__title">
            <span className="property-hero__title-highlight">believe in finding it</span> 
          </h1>
          <p className="property-hero__subtitle">
            with the UK's largest choice of homes
          </p>
        </div>

        {/* Search Card */}
        <div className="property-hero__card">
          {/* Tabs */}
          <div className="property-hero__tabs">
            <button
              onClick={() => setActiveTab('buy')}
              className={`property-hero__tab ${
                activeTab === 'buy'
                  ? 'property-hero__tab--active'
                  : 'property-hero__tab--inactive'
              }`}
            >
              Buy
              {activeTab === 'buy' && (
                <div className="property-hero__tab-indicator" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('rent')}
              className={`property-hero__tab ${
                activeTab === 'rent'
                  ? 'property-hero__tab--active'
                  : 'property-hero__tab--inactive'
              }`}
            >
              Rent
              {activeTab === 'rent' && (
                <div className="property-hero__tab-indicator" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('sold')}
              className={`property-hero__tab ${
                activeTab === 'sold'
                  ? 'property-hero__tab--active'
                  : 'property-hero__tab--inactive'
              }`}
            >
              Sold
              {activeTab === 'sold' && (
                <div className="property-hero__tab-indicator" />
              )}
            </button>
          </div>

          {/* Search Section */}
          <div>
            <h2 className="property-hero__search-title">
              Search properties to {activeTab}
            </h2>
            <div className="property-hero__search-container">
              <div className="property-hero__input-wrapper">
                <Search className="property-hero__search-icon" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Bath, NW3, or Leeds station"
                  className="property-hero__input"
                />
              </div>
              <button
                onClick={handleSearch}
                className="property-hero__search-button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
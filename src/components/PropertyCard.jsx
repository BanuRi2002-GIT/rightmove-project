import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

function PropertyCard({ property, onAddToFavourites, isFavourite }) {
  const formatPrice = (price) => {
    return `£${price.toLocaleString()}`;
  };

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    onAddToFavourites(property);
  };

  return (
    <div className="property-card">
      <Link to={`/property/${property.id}`} className="property-card-link">
        <div className="property-image">
          <img src={property.picture} alt={property.location} />
          <div className="property-type-badge">{property.type}</div>
        </div>
        
        <div className="property-content">
          <div className="property-header">
            <h3 className="property-price">{formatPrice(property.price)}</h3>
            <span className="property-tenure">{property.tenure}</span>
          </div>

          <p className="property-location">{property.location}</p>

          <div className="property-features">
            <div className="feature-item">
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{property.bedrooms} Bedroom{property.bedrooms !== 1 ? 's' : ''}</span>
            </div>
          </div>

          <p className="property-description">
            {property.description.substring(0, 120)}...
          </p>

          <div className="property-footer">
            <span className="property-date">
              Added: {property.added.month} {property.added.day}, {property.added.year}
            </span>
          </div>
        </div>
      </Link>

      <button 
        className={`favourite-button ${isFavourite ? 'is-favourite' : ''}`}
        onClick={handleAddToFavourites}
        aria-label={isFavourite ? 'Already in favourites' : 'Add to favourites'}
      >
        <svg className="heart-icon" fill={isFavourite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    </div>
  );
}

export default PropertyCard;
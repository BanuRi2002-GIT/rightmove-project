import { Link } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import './PropertyCard.css';

function PropertyCard({ property, addToFavourites, isFavourite }) {
  // Set up drag functionality
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PROPERTY',
    item: property,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  // Format price with commas
  const formatPrice = (price) => {
    return '£' + price.toLocaleString();
  };

  // Truncate description
  const truncateDescription = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div 
      ref={drag}
      className={`property-card ${isDragging ? 'dragging' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="property-image">
        <img src={property.picture} alt={property.location} />
        <button
          className={`favourite-btn ${isFavourite ? 'active' : ''}`}
          onClick={() => addToFavourites(property)}
          aria-label="Add to favourites"
        >
          {isFavourite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="property-info">
        <div className="property-price">{formatPrice(property.price)}</div>
        <div className="property-type">
          {property.type} • {property.bedrooms} bedroom{property.bedrooms !== 1 ? 's' : ''}
        </div>
        <div className="property-location">{property.location}</div>
        <div className="property-description">
          {truncateDescription(property.description)}
        </div>
        <Link to={`/property/${property.id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;
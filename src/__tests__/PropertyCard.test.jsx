// src/__tests__/PropertyCard.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import PropertyCard from '../components/PropertyCard';

const mockProperty = {
  id: 'prop1',
  type: 'House',
  bedrooms: 3,
  price: 750000,
  tenure: 'Freehold',
  location: 'Petts Wood Road, Petts Wood, Orpington BR5',
  picture: '/Images/property1.jpg',
  description: 'Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station',
  added: {
    month: 'October',
    day: 12,
    year: 2022
  }
};

import { vi } from 'vitest';

const mockOnAddToFavourites = vi.fn();


describe('PropertyCard Component Tests', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Test 1: PropertyCard renders with correct data
  test('renders PropertyCard with property details', () => {
    render(
      <BrowserRouter>
        <PropertyCard 
          property={mockProperty} 
          onAddToFavourites={mockOnAddToFavourites}
          isFavourite={false}
        />
      </BrowserRouter>
    );
    
    expect(screen.getByText('£750,000')).toBeInTheDocument();
    expect(screen.getByText(/3 Bedroom/i)).toBeInTheDocument();
    expect(screen.getByText(/Freehold/i)).toBeInTheDocument();
  });

  // Test 2: Property image is displayed
  test('displays property image with correct alt text', () => {
    render(
      <BrowserRouter>
        <PropertyCard 
          property={mockProperty} 
          onAddToFavourites={mockOnAddToFavourites}
          isFavourite={false}
        />
      </BrowserRouter>
    );
    
    const image = screen.getByAltText(mockProperty.location);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProperty.picture);
  });

  // Test 3: Property type badge is displayed
  test('displays property type badge', () => {
    render(
      <BrowserRouter>
        <PropertyCard 
          property={mockProperty} 
          onAddToFavourites={mockOnAddToFavourites}
          isFavourite={false}
        />
      </BrowserRouter>
    );
    
    expect(screen.getByText('House')).toBeInTheDocument();
  });

  // Test 4: Add to Favourites button works
  test('calls onAddToFavourites when favourite button is clicked', () => {
    render(
      <BrowserRouter>
        <PropertyCard 
          property={mockProperty} 
          onAddToFavourites={mockOnAddToFavourites}
          isFavourite={false}
        />
      </BrowserRouter>
    );
    
    const favouriteButton = screen.getByRole('button', { name: /add to favourites/i });
    fireEvent.click(favouriteButton);
    
    expect(mockOnAddToFavourites).toHaveBeenCalledTimes(1);
    expect(mockOnAddToFavourites).toHaveBeenCalledWith(mockProperty);
  });

  // Test 5: Link to property details exists
  test('contains link to property details page', () => {
    render(
      <BrowserRouter>
        <PropertyCard 
          property={mockProperty} 
          onAddToFavourites={mockOnAddToFavourites}
          isFavourite={false}
        />
      </BrowserRouter>
    );
    
    const detailsLink = screen.getByRole('link', { name: /petts wood road/i });
    expect(detailsLink).toHaveAttribute('href', `/property/${mockProperty.id}`);
  });
});
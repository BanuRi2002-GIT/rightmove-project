// src/__tests__/PropertiesList.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PropertiesList from '../components/PropertiesList';

// Mock function for adding to favourites
const mockOnAddToFavourites = vi.fn();

describe('PropertiesList Component Tests', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Test 1: Component renders successfully
  test('renders PropertiesList component', () => {
    render(
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <PropertiesList 
            favourites={[]} 
            onAddToFavourites={mockOnAddToFavourites} 
          />
        </DndProvider>
      </BrowserRouter>
    );
    expect(screen.getByText(/All Properties/i)).toBeInTheDocument();
  });

  // Test 2: Displays property count
  test('displays correct property count', () => {
    render(
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <PropertiesList 
            favourites={[]} 
            onAddToFavourites={mockOnAddToFavourites} 
          />
        </DndProvider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Showing \d+ properties/i)).toBeInTheDocument();
  });

  // Test 3: Displays property cards
  test('renders property cards from JSON data', () => {
    render(
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <PropertiesList 
            favourites={[]} 
            onAddToFavourites={mockOnAddToFavourites} 
          />
        </DndProvider>
      </BrowserRouter>
    );
    const viewDetailsButtons = screen.getAllByText(/View Details/i);
    expect(viewDetailsButtons.length).toBeGreaterThan(0);
  });

  // Test 4: Property prices are displayed correctly
  test('displays property prices in correct format', () => {
    render(
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <PropertiesList 
            favourites={[]} 
            onAddToFavourites={mockOnAddToFavourites} 
          />
        </DndProvider>
      </BrowserRouter>
    );
    const priceElements = screen.getAllByText(/£/);
    expect(priceElements.length).toBeGreaterThan(0);
  });

  // Test 5: Add to Favourites buttons are present
  test('renders Add to Favourites buttons for each property', () => {
    render(
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <PropertiesList 
            favourites={[]} 
            onAddToFavourites={mockOnAddToFavourites} 
          />
        </DndProvider>
      </BrowserRouter>
    );
    const favouriteButtons = screen.getAllByText(/Add to Favourites/i);
    expect(favouriteButtons.length).toBeGreaterThan(0);
  });

});

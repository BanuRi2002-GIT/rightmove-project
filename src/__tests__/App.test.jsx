// src/__tests__/App.test.jsx
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  test('renders header links', () => {
    render(<App />)

    // Check header links using role (more robust than getByText)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /search properties/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /all properties/i })).toBeInTheDocument()
  })

  test('renders hero section with search input and button', () => {
    render(<App />)

    // Hero title and subtitle
    expect(screen.getByText(/believe in finding it/i)).toBeInTheDocument()
    expect(
      screen.getByText(/with the uk's largest choice of homes/i)
    ).toBeInTheDocument()

    // Search input exists
    expect(
      screen.getByPlaceholderText(/Bath, NW3, or Leeds station/i)
    ).toBeInTheDocument()

    // Search button exists
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })
})

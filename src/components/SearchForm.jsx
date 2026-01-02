import { useState } from 'react';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [formData, setFormData] = useState({
    type: null,
    minPrice: null,
    maxPrice: null,
    minBedrooms: null,
    maxBedrooms: null,
    postcode: ''
  });

  const [errors, setErrors] = useState({
    type: false,
    minPrice: false,
    maxPrice: false,
    minBedrooms: false,
    maxBedrooms: false,
    postcode: false
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Options for React Select dropdowns
  const typeOptions = [
    { value: 'House', label: 'House' },
    { value: 'Flat', label: 'Flat' }
  ];

  const priceOptions = [
    { value: 200000, label: '£200,000' },
    { value: 300000, label: '£300,000' },
    { value: 400000, label: '£400,000' },
    { value: 500000, label: '£500,000' },
    { value: 750000, label: '£750,000' },
    { value: 1000000, label: '£1,000,000' }
  ];

  const maxPriceOptions = [
    { value: 300000, label: '£300,000' },
    { value: 400000, label: '£400,000' },
    { value: 500000, label: '£500,000' },
    { value: 750000, label: '£750,000' },
    { value: 1000000, label: '£1,000,000' },
    { value: 1500000, label: '£1,500,000' },
    { value: 2000000, label: '£2,000,000' }
  ];

  const bedroomOptions = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5+' }
  ];

  // Validate all required fields
  const validateForm = () => {
    const newErrors = {
      type: !formData.type || !formData.type.value,
      minPrice: !formData.minPrice || !formData.minPrice.value,
      maxPrice: !formData.maxPrice || !formData.maxPrice.value,
      minBedrooms: !formData.minBedrooms || !formData.minBedrooms.value,
      maxBedrooms: !formData.maxBedrooms || !formData.maxBedrooms.value,
      postcode: formData.postcode.trim() === ''
    };

    setErrors(newErrors);
    
    // Return true if no errors
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    // Convert form data to search criteria
    const criteria = {
      type: formData.type.value,
      minPrice: formData.minPrice.value,
      maxPrice: formData.maxPrice.value,
      minBedrooms: formData.minBedrooms.value,
      maxBedrooms: formData.maxBedrooms.value,
      postcode: formData.postcode
    };

    onSearch(criteria);
  };

  const handleReset = () => {
    setFormData({
      type: null,
      minPrice: null,
      maxPrice: null,
      minBedrooms: null,
      maxBedrooms: null,
      postcode: ''
    });
    setErrors({
      type: false,
      minPrice: false,
      maxPrice: false,
      minBedrooms: false,
      maxBedrooms: false,
      postcode: false
    });
    setHasSubmitted(false);
  };

  // Clear error when user makes a change
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (hasSubmitted) {
      setErrors({ ...errors, [field]: false });
    }
  };

  // Custom styles for error state
  const getSelectStyles = (fieldName) => ({
    control: (base, state) => ({
      ...base,
      borderColor: errors[fieldName] ? '#ef4444' : state.isFocused ? '#5ea483' : '#e2e8f0',
      borderWidth: '2px',
      '&:hover': {
        borderColor: errors[fieldName] ? '#ef4444' : '#cbd5e1'
      }
    })
  });

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Search Properties</h2>
      
      {hasSubmitted && Object.values(errors).some(error => error) && (
        <div className="error-message">
          Please fill in all required fields to search for properties
        </div>
      )}
      
      <div className="form-group">
        <label htmlFor="type">
          Property Type: <span className="required-asterisk">*</span>
        </label>
        <Select
          id="type"
          options={typeOptions}
          value={formData.type}
          onChange={(option) => handleChange('type', option)}
          placeholder="Select property type..."
          className="react-select-container"
          classNamePrefix="react-select"
          styles={getSelectStyles('type')}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="minPrice">
            Min Price: <span className="required-asterisk">*</span>
          </label>
          <Select
            id="minPrice"
            options={priceOptions}
            value={formData.minPrice}
            onChange={(option) => handleChange('minPrice', option)}
            placeholder="Select minimum price..."
            className="react-select-container"
            classNamePrefix="react-select"
            styles={getSelectStyles('minPrice')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="maxPrice">
            Max Price: <span className="required-asterisk">*</span>
          </label>
          <Select
            id="maxPrice"
            options={maxPriceOptions}
            value={formData.maxPrice}
            onChange={(option) => handleChange('maxPrice', option)}
            placeholder="Select maximum price..."
            className="react-select-container"
            classNamePrefix="react-select"
            styles={getSelectStyles('maxPrice')}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="minBedrooms">
            Min Bedrooms: <span className="required-asterisk">*</span>
          </label>
          <Select
            id="minBedrooms"
            options={bedroomOptions}
            value={formData.minBedrooms}
            onChange={(option) => handleChange('minBedrooms', option)}
            placeholder="Select minimum bedrooms..."
            className="react-select-container"
            classNamePrefix="react-select"
            styles={getSelectStyles('minBedrooms')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="maxBedrooms">
            Max Bedrooms: <span className="required-asterisk">*</span>
          </label>
          <Select
            id="maxBedrooms"
            options={bedroomOptions}
            value={formData.maxBedrooms}
            onChange={(option) => handleChange('maxBedrooms', option)}
            placeholder="Select maximum bedrooms..."
            className="react-select-container"
            classNamePrefix="react-select"
            styles={getSelectStyles('maxBedrooms')}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="postcode">
          Postcode Area: <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          id="postcode"
          value={formData.postcode}
          onChange={(e) => handleChange('postcode', e.target.value.toUpperCase())}
          placeholder="e.g. BR1, BR2, BR4, BR5, BR6, BR7"
          className={`postcode-input ${errors.postcode ? 'input-error' : ''}`}
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn btn-primary">Search</button>
        <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
}

export default SearchForm;
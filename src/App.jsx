// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// // import SearchForm from './components/SearchForm';   
// import './App.css';

// // Simple placeholder pages
// const PropertySearch = () => <h2>Property Search Page</h2>;
// const PropertyList = () => <h2>Property List Page</h2>;

// function App() {
//   return (  
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<PropertySearch />} />
//         <Route path="/property-list" element={<PropertyList />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import SearchForm from './components/SearchForm';
// // import propertiesData from './data/properties.json';
// import './App.css';

// // Property Search Page
// const PropertySearch = () => {
//   const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);

//   const handleSearch = (criteria) => {
//     const filtered = propertiesData.properties.filter((prop) => {
//       return (
//         (criteria.type ? prop.type === criteria.type : true) &&
//         (criteria.minPrice ? prop.price >= criteria.minPrice : true) &&
//         (criteria.maxPrice ? prop.price <= criteria.maxPrice : true) &&
//         (criteria.minBedrooms ? prop.bedrooms >= criteria.minBedrooms : true) &&
//         (criteria.maxBedrooms ? prop.bedrooms <= criteria.maxBedrooms : true) &&
//         (criteria.postcode ? prop.location.toUpperCase().includes(criteria.postcode.toUpperCase()) : true) &&
//         (criteria.dateFrom ? new Date(`${prop.added.year}-${prop.added.month}-${prop.added.day}`) >= criteria.dateFrom : true) &&
//         (criteria.dateTo ? new Date(`${prop.added.year}-${prop.added.month}-${prop.added.day}`) <= criteria.dateTo : true)
//       );
//     });
//     setFilteredProperties(filtered);
//   };

//   return (
//     <div className="property-search-page">
//       <SearchForm onSearch={handleSearch} />
//       <div className="property-list">
//         {filteredProperties.length > 0 ? (
//           filteredProperties.map((prop) => (
//             <div key={prop.id} className="property-card">
//               <img src={prop.picture} alt={prop.type} width="300" />
//               <h3>{prop.type} - £{prop.price.toLocaleString()}</h3>
//               <p>{prop.bedrooms} bedrooms | {prop.tenure}</p>
//               <p>{prop.location}</p>
//               <p>{prop.description}</p>
//             </div>
//           ))
//         ) : (
//           <p>No properties found matching your criteria.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// // Simple placeholder Property List Page
// const PropertyList = () => <h2>Property List Page</h2>;

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<PropertySearch />} />
//         <Route path="/property-list" element={<PropertyList />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import SearchForm from './components/SearchForm';
// import './App.css';

// // Home page showing only the search form
// const Home = () => (
//   <div className="home-page">
//     <SearchForm />
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import SearchForm from './components/SearchForm';
// import PropertiesList from './components/propertiesList';
// import './App.css';

// // Home page showing search + properties list
// const Home = ({ onAddToFavourites }) => (
//   <div className="home-page">
//     <SearchForm />
//     <PropertiesList onAddToFavourites={onAddToFavourites} />
//   </div>
// );

// function App() {
//   const [favourites, setFavourites] = useState([]);

//   const handleAddToFavourites = (property) => {
//     setFavourites((prev) =>
//       prev.find((p) => p.id === property.id)
//         ? prev
//         : [...prev, property]
//     );
//   };

//   return (
//     <Router>
//       <Header />

//       <Routes>
//         <Route
//           path="/"
//           element={<Home onAddToFavourites={handleAddToFavourites} />}
//         />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import SearchForm from './components/SearchForm';
// import PropertyDetails from './components/propertyDetails';
// import './App.css';

// // Home page showing only the search form
// const Home = () => (
//   <div className="home-page">
//     <SearchForm />
//   </div>
// );

// function App() {
//   const handleAddToFavourites = (property) => {
//     console.log('Added to favourites:', property);
//   };

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/property/:id"
//           element={
//             <PropertyDetails onAddToFavourites={handleAddToFavourites} />
//           }
//         />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import SearchForm from './components/SearchForm';
// import PropertiesList from './components/propertiesList';
// import PropertyDetails from './components/propertyDetails';
// import './App.css';

// // Home page showing only the search form
// const Home = () => (
//   <div className="home-page">
//     <SearchForm />
//   </div>
// );

// function App() {
//   const handleAddToFavourites = (property) => {
//     console.log('Added to favourites:', property);
//   };

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route
//           path="/property-list"
//           element={
//             <PropertiesList onAddToFavourites={handleAddToFavourites} />
//           }
//         />

//         <Route
//           path="/property/:id"
//           element={
//             <PropertyDetails onAddToFavourites={handleAddToFavourites} />
//           }
//         />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import SearchForm from './components/SearchForm';
// import FavouritesBar from './components/SearchBar';
// import PropertiesList from './components/PropertiesList';
// import PropertyDetails from './components/PropertyDetails';
// import './App.css';

// // Import properties data
// import propertiesData from './data/properties.json';

// function App() {
//   const [searchResults, setSearchResults] = useState([]);
//   const [favourites, setFavourites] = useState([]);
//   const [hasSearched, setHasSearched] = useState(false);

//   // Convert month name to number
//   const getMonthNumber = (monthName) => {
//     const months = {
//       'January': 0, 'February': 1, 'March': 2, 'April': 3,
//       'May': 4, 'June': 5, 'July': 6, 'August': 7,
//       'September': 8, 'October': 9, 'November': 10, 'December': 11
//     };
//     return months[monthName] || 0;
//   };

//   // Handle search
//   const handleSearch = (criteria) => {
//     setHasSearched(true);
//     let results = [...propertiesData.properties];

//     // Filter by type
//     if (criteria.type) {
//       results = results.filter(prop => 
//         prop.type.toLowerCase() === criteria.type.toLowerCase()
//       );
//     }

//     // Filter by price range
//     if (criteria.minPrice) {
//       results = results.filter(prop => prop.price >= Number(criteria.minPrice));
//     }
//     if (criteria.maxPrice) {
//       results = results.filter(prop => prop.price <= Number(criteria.maxPrice));
//     }

//     // Filter by bedrooms
//     if (criteria.minBedrooms) {
//       results = results.filter(prop => prop.bedrooms >= Number(criteria.minBedrooms));
//     }
//     if (criteria.maxBedrooms) {
//       results = results.filter(prop => prop.bedrooms <= Number(criteria.maxBedrooms));
//     }

//     // Filter by postcode
//     if (criteria.postcode) {
//       results = results.filter(prop => 
//         prop.location.toUpperCase().includes(criteria.postcode.toUpperCase())
//       );
//     }

//     // Filter by date range
//     if (criteria.dateFrom || criteria.dateTo) {
//       results = results.filter(prop => {
//         const propDate = new Date(
//           prop.added.year, 
//           getMonthNumber(prop.added.month), 
//           prop.added.day
//         );
        
//         let matchesFrom = true;
//         let matchesTo = true;
        
//         if (criteria.dateFrom) {
//           matchesFrom = propDate >= criteria.dateFrom;
//         }
        
//         if (criteria.dateTo) {
//           matchesTo = propDate <= criteria.dateTo;
//         }
        
//         return matchesFrom && matchesTo;
//       });
//     }

//     setSearchResults(results);
//   };

//   // Add to favourites
//   const handleAddToFavourites = (property) => {
//     // Check if property is already in favourites
//     if (!favourites.find(fav => fav.id === property.id)) {
//       setFavourites([...favourites, property]);
//       alert(`${property.location} has been added to your favourites!`);
//     } else {
//       alert('This property is already in your favourites!');
//     }
//   };

//   // Remove from favourites
//   const handleRemoveFromFavourites = (propertyId) => {
//     setFavourites(favourites.filter(fav => fav.id !== propertyId));
//   };

//   // Clear all favourites
//   const handleClearFavourites = () => {
//     if (window.confirm('Are you sure you want to clear all favourites?')) {
//       setFavourites([]);
//     }
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <main className="main-content">
//           <Routes>
//             {/* Search Property Page - Route: / */}
//             <Route 
//               path="/" 
//               element={
//                 <>
//                   <SearchForm onSearch={handleSearch} />
//                   <FavouritesBar 
//                     favourites={favourites}
//                     onRemove={handleRemoveFromFavourites}
//                     onClear={handleClearFavourites}
//                   />
//                 </>
//               } 
//             />
            
//             {/* Properties List Page - Route: /property-list */}
//             <Route 
//               path="/property-list" 
//               element={
//                 <PropertiesList 
//                   onAddToFavourites={handleAddToFavourites}
//                 />
//               } 
//             />

//             {/* Property Details Page - Route: /property/:id */}
//             <Route 
//               path="/property/:id" 
//               element={
//                 <PropertyDetails 
//                   onAddToFavourites={handleAddToFavourites}
//                 />
//               } 
//             />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import PropertyHero from './components/PropertyHero';
// import SearchForm from './components/SearchForm';
// import FavouritesBar from './components/SearchBar';
// import PropertiesList from './components/PropertiesList';
// import PropertyDetails from './components/PropertyDetails';
// import './App.css';

// // Import properties data
// import propertiesData from './data/properties.json';

// function AppContent() {
//   const location = useLocation();
//   const [searchResults, setSearchResults] = useState([]);
//   const [favourites, setFavourites] = useState([]);
//   const [hasSearched, setHasSearched] = useState(false);

//   // Convert month name to number
//   const getMonthNumber = (monthName) => {
//     const months = {
//       'January': 0, 'February': 1, 'March': 2, 'April': 3,
//       'May': 4, 'June': 5, 'July': 6, 'August': 7,
//       'September': 8, 'October': 9, 'November': 10, 'December': 11
//     };
//     return months[monthName] || 0;
//   };

//   // Handle search from hero section
//   const handleHeroSearch = (searchQuery, activeTab) => {
//     setHasSearched(true);
//     let results = [...propertiesData.properties];

//     // Filter by search query (location/postcode)
//     if (searchQuery && searchQuery.trim() !== '') {
//       results = results.filter(prop => 
//         prop.location.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setSearchResults(results);

//     // Scroll to results section
//     setTimeout(() => {
//       const resultsSection = document.querySelector('.search-results-section, .no-results');
//       if (resultsSection) {
//         resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     }, 100);
//   };

//   // Handle search from advanced search form
//   const handleSearch = (criteria) => {
//     setHasSearched(true);
//     let results = [...propertiesData.properties];

//     // Filter by type
//     if (criteria.type) {
//       results = results.filter(prop => 
//         prop.type.toLowerCase() === criteria.type.toLowerCase()
//       );
//     }

//     // Filter by price range
//     if (criteria.minPrice) {
//       results = results.filter(prop => prop.price >= Number(criteria.minPrice));
//     }
//     if (criteria.maxPrice) {
//       results = results.filter(prop => prop.price <= Number(criteria.maxPrice));
//     }

//     // Filter by bedrooms
//     if (criteria.minBedrooms) {
//       results = results.filter(prop => prop.bedrooms >= Number(criteria.minBedrooms));
//     }
//     if (criteria.maxBedrooms) {
//       results = results.filter(prop => prop.bedrooms <= Number(criteria.maxBedrooms));
//     }

//     // Filter by postcode
//     if (criteria.postcode) {
//       results = results.filter(prop => 
//         prop.location.toUpperCase().includes(criteria.postcode.toUpperCase())
//       );
//     }

//     // Filter by date range
//     if (criteria.dateFrom || criteria.dateTo) {
//       results = results.filter(prop => {
//         const propDate = new Date(
//           prop.added.year, 
//           getMonthNumber(prop.added.month), 
//           prop.added.day
//         );
        
//         let matchesFrom = true;
//         let matchesTo = true;
        
//         if (criteria.dateFrom) {
//           matchesFrom = propDate >= criteria.dateFrom;
//         }
        
//         if (criteria.dateTo) {
//           matchesTo = propDate <= criteria.dateTo;
//         }
        
//         return matchesFrom && matchesTo;
//       });
//     }

//     setSearchResults(results);

//     // Scroll to results section
//     setTimeout(() => {
//       const resultsSection = document.querySelector('.search-results-section, .no-results');
//       if (resultsSection) {
//         resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     }, 100);
//   };

//   // Add to favourites
//   const handleAddToFavourites = (property) => {
//     if (!favourites.find(fav => fav.id === property.id)) {
//       setFavourites([...favourites, property]);
//       alert(`${property.location} has been added to your favourites!`);
//     } else {
//       alert('This property is already in your favourites!');
//     }
//   };

//   // Remove from favourites
//   const handleRemoveFromFavourites = (propertyId) => {
//     setFavourites(favourites.filter(fav => fav.id !== propertyId));
//   };

//   // Clear all favourites
//   const handleClearFavourites = () => {
//     if (window.confirm('Are you sure you want to clear all favourites?')) {
//       setFavourites([]);
//     }
//   };

//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         {/* Home Page with Hero Section - Route: / */}
//         <Route 
//           path="/" 
//           element={
//             <>
//               <PropertyHero onSearch={handleHeroSearch} />
//             </>
//           } 
//         />
        
//         {/* Search Properties Page - Route: /search */}
//         <Route 
//           path="/search" 
//           element={
//             <main className="main-content">
//               <div className="page-header">
//                 <h1>Search Properties</h1>
//                 <p className="page-subtitle">Find your perfect home with advanced search filters</p>
//               </div>
              
//               {/* Advanced Search Form */}
//               <div className="search-section">
//                 <SearchForm onSearch={handleSearch} />
//               </div>
              
//               {/* Favourites Bar */}
//               <div className="favourites-section">
//                 <FavouritesBar 
//                   favourites={favourites}
//                   onRemove={handleRemoveFromFavourites}
//                   onClear={handleClearFavourites}
//                 />
//               </div>
              
//               {/* Search Results */}
//               {hasSearched && (
//                 <>
//                   {searchResults.length > 0 ? (
//                     <div className="search-results-section">
//                       <h2 className="results-title">
//                         Search Results ({searchResults.length} {searchResults.length === 1 ? 'property' : 'properties'} found)
//                       </h2>
//                       <PropertiesList 
//                         properties={searchResults}
//                         onAddToFavourites={handleAddToFavourites}
//                       />
//                     </div>
//                   ) : (
//                     <div className="no-results">
//                       <h3>No properties found</h3>
//                       <p>Try adjusting your search criteria to find more properties.</p>
//                     </div>
//                   )}
//                 </>
//               )}
//             </main>
//           } 
//         />
        
//         {/* Properties List Page - Route: /property-list */}
//         <Route 
//           path="/property-list" 
//           element={
//             <main className="main-content">
//               <div className="page-header">
//                 <h1>All Properties</h1>
//                 <p className="page-subtitle">Browse our complete collection of properties</p>
//               </div>
//               <PropertiesList 
//                 onAddToFavourites={handleAddToFavourites}
//               />
//             </main>
//           } 
//         />

//         {/* Property Details Page - Route: /property/:id */}
//         <Route 
//           path="/property/:id" 
//           element={
//             <main className="main-content">
//               <PropertyDetails 
//                 onAddToFavourites={handleAddToFavourites}
//               />
//             </main>
//           } 
//         />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import PropertyHero from './components/PropertyHero';
// import SearchForm from './components/SearchForm';
// import FavouritesBar from './components/SearchBar';
// import PropertiesList from './components/PropertiesList';
// import PropertyDetails from './components/PropertyDetails';
// import './App.css';

// // Import properties data
// import propertiesData from './data/properties.json';

// function AppContent() {
//   const location = useLocation();
//   const [searchResults, setSearchResults] = useState([]);
//   const [favourites, setFavourites] = useState([]);
//   const [hasSearched, setHasSearched] = useState(false);

//   // Convert month name to number
//   const getMonthNumber = (monthName) => {
//     const months = {
//       'January': 0, 'February': 1, 'March': 2, 'April': 3,
//       'May': 4, 'June': 5, 'July': 6, 'August': 7,
//       'September': 8, 'October': 9, 'November': 10, 'December': 11
//     };
//     return months[monthName] || 0;
//   };

//   // Handle search from hero section
//   const handleHeroSearch = (searchQuery, activeTab) => {
//     setHasSearched(true);
//     let results = [...propertiesData.properties];

//     // Filter by search query (location/postcode)
//     if (searchQuery && searchQuery.trim() !== '') {
//       results = results.filter(prop => 
//         prop.location.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setSearchResults(results);

//     // Scroll to results section
//     setTimeout(() => {
//       const resultsSection = document.querySelector('.search-results-section, .no-results');
//       if (resultsSection) {
//         resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     }, 100);
//   };

//   // Handle search from advanced search form
//   const handleSearch = (criteria) => {
//     setHasSearched(true);
//     let results = [...propertiesData.properties];

//     // Filter by type
//     if (criteria.type) {
//       results = results.filter(prop => 
//         prop.type.toLowerCase() === criteria.type.toLowerCase()
//       );
//     }

//     // Filter by price range
//     if (criteria.minPrice) {
//       results = results.filter(prop => prop.price >= Number(criteria.minPrice));
//     }
//     if (criteria.maxPrice) {
//       results = results.filter(prop => prop.price <= Number(criteria.maxPrice));
//     }

//     // Filter by bedrooms
//     if (criteria.minBedrooms) {
//       results = results.filter(prop => prop.bedrooms >= Number(criteria.minBedrooms));
//     }
//     if (criteria.maxBedrooms) {
//       results = results.filter(prop => prop.bedrooms <= Number(criteria.maxBedrooms));
//     }

//     // Filter by postcode
//     if (criteria.postcode) {
//       results = results.filter(prop => 
//         prop.location.toUpperCase().includes(criteria.postcode.toUpperCase())
//       );
//     }

//     // Filter by date range
//     if (criteria.dateFrom || criteria.dateTo) {
//       results = results.filter(prop => {
//         const propDate = new Date(
//           prop.added.year, 
//           getMonthNumber(prop.added.month), 
//           prop.added.day
//         );
        
//         let matchesFrom = true;
//         let matchesTo = true;
        
//         if (criteria.dateFrom) {
//           matchesFrom = propDate >= criteria.dateFrom;
//         }
        
//         if (criteria.dateTo) {
//           matchesTo = propDate <= criteria.dateTo;
//         }
        
//         return matchesFrom && matchesTo;
//       });
//     }

//     setSearchResults(results);

//     // Scroll to results section
//     setTimeout(() => {
//       const resultsSection = document.querySelector('.search-results-section, .no-results');
//       if (resultsSection) {
//         resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     }, 100);
//   };

//   // Add to favourites
//   const handleAddToFavourites = (property) => {
//     if (!favourites.find(fav => fav.id === property.id)) {
//       setFavourites([...favourites, property]);
//       alert(`${property.location} has been added to your favourites!`);
//     } else {
//       alert('This property is already in your favourites!');
//     }
//   };

//   // Remove from favourites
//   const handleRemoveFromFavourites = (propertyId) => {
//     setFavourites(favourites.filter(fav => fav.id !== propertyId));
//   };

//   // Clear all favourites
//   const handleClearFavourites = () => {
//     if (window.confirm('Are you sure you want to clear all favourites?')) {
//       setFavourites([]);
//     }
//   };

//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         {/* Home Page with Hero Section - Route: / */}
//         <Route 
//           path="/" 
//           element={
//             <>
//               <PropertyHero onSearch={handleHeroSearch} />
//             </>
//           } 
//         />
        
//         {/* Search Properties Page - Route: /search */}
//         <Route 
//           path="/search" 
//           element={
//             <main className="main-content">
//               <div className="page-header">
//                 <h1>Search Properties</h1>
//                 <p className="page-subtitle">Find your perfect home with advanced search filters</p>
//               </div>
              
//               {/* Advanced Search Form */}
//               <div className="search-section">
//                 <SearchForm onSearch={handleSearch} />
//               </div>
              
//               {/* Favourites Bar */}
//               <div className="favourites-section">
//                 <FavouritesBar 
//                   favourites={favourites}
//                   onRemove={handleRemoveFromFavourites}
//                   onClear={handleClearFavourites}
//                 />
//               </div>
              
//               {/* Search Results */}
//               {hasSearched && (
//                 <>
//                   {searchResults.length > 0 ? (
//                     <div className="search-results-section">
//                       <h2 className="results-title">
//                         Search Results ({searchResults.length} {searchResults.length === 1 ? 'property' : 'properties'} found)
//                       </h2>
//                       <PropertiesList 
//                         properties={searchResults}
//                         onAddToFavourites={handleAddToFavourites}
//                       />
//                     </div>
//                   ) : (
//                     <div className="no-results">
//                       <h3>No properties found</h3>
//                       <p>Try adjusting your search criteria to find more properties.</p>
//                     </div>
//                   )}
//                 </>
//               )}
//             </main>
//           } 
//         />
        
//         {/* Properties List Page - Route: /property-list */}
//         <Route 
//           path="/property-list" 
//           element={
//             <main className="main-content">
//               <div className="page-header">
//                 <h1>All Properties</h1>
//                 <p className="page-subtitle">Browse our complete collection of properties</p>
//               </div>
//               <PropertiesList 
//                 onAddToFavourites={handleAddToFavourites}
//               />
//             </main>
//           } 
//         />

//         {/* Property Details Page - Route: /property/:id */}
//         <Route 
//           path="/property/:id" 
//           element={
//             <main className="main-content">
//               <PropertyDetails 
//                 onAddToFavourites={handleAddToFavourites}
//               />
//             </main>
//           } 
//         />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import PropertyHero from './components/PropertyHero';
// import SearchForm from './components/SearchForm';
// import FavouritesBar from './components/SearchBar';
// import PropertiesList from './components/PropertiesList';
// import PropertyDetails from './components/PropertyDetails';
// import './App.css';

// // Import properties data
// import propertiesData from './data/properties.json';

// function AppContent() {
//   const location = useLocation();
//   const [searchResults, setSearchResults] = useState([]);
//   const [favourites, setFavourites] = useState([]);
//   const [hasSearched, setHasSearched] = useState(false);

//   // Convert month name to number
//   const getMonthNumber = (monthName) => {
//     const months = {
//       'January': 0, 'February': 1, 'March': 2, 'April': 3,
//       'May': 4, 'June': 5, 'July': 6, 'August': 7,
//       'September': 8, 'October': 9, 'November': 10, 'December': 11
//     };
//     return months[monthName] || 0;
//   };

//   // Handle search from hero section
//   const handleHeroSearch = (searchQuery, activeTab) => {
//     setHasSearched(true);
//     let results = [...propertiesData.properties];

//     // Filter by search query (location/postcode)
//     if (searchQuery && searchQuery.trim() !== '') {
//       results = results.filter(prop => 
//         prop.location.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setSearchResults(results);

//     // Scroll to results section
//     setTimeout(() => {
//       const resultsSection = document.querySelector('.search-results-section, .no-results');
//       if (resultsSection) {
//         resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     }, 100);
//   };

//   // Handle search from advanced search form
//   const handleSearch = (criteria) => {
//     setHasSearched(true);
//     let results = [...propertiesData.properties];

//     // Filter by type
//     if (criteria.type) {
//       results = results.filter(prop => 
//         prop.type.toLowerCase() === criteria.type.toLowerCase()
//       );
//     }

//     // Filter by price range
//     if (criteria.minPrice) {
//       results = results.filter(prop => prop.price >= Number(criteria.minPrice));
//     }
//     if (criteria.maxPrice) {
//       results = results.filter(prop => prop.price <= Number(criteria.maxPrice));
//     }

//     // Filter by bedrooms
//     if (criteria.minBedrooms) {
//       results = results.filter(prop => prop.bedrooms >= Number(criteria.minBedrooms));
//     }
//     if (criteria.maxBedrooms) {
//       results = results.filter(prop => prop.bedrooms <= Number(criteria.maxBedrooms));
//     }

//     // Filter by postcode
//     if (criteria.postcode) {
//       results = results.filter(prop => 
//         prop.location.toUpperCase().includes(criteria.postcode.toUpperCase())
//       );
//     }

//     // Filter by date range
//     if (criteria.dateFrom || criteria.dateTo) {
//       results = results.filter(prop => {
//         const propDate = new Date(
//           prop.added.year, 
//           getMonthNumber(prop.added.month), 
//           prop.added.day
//         );
        
//         let matchesFrom = true;
//         let matchesTo = true;
        
//         if (criteria.dateFrom) {
//           matchesFrom = propDate >= criteria.dateFrom;
//         }
        
//         if (criteria.dateTo) {
//           matchesTo = propDate <= criteria.dateTo;
//         }
        
//         return matchesFrom && matchesTo;
//       });
//     }

//     setSearchResults(results);

//     // Scroll to results section
//     setTimeout(() => {
//       const resultsSection = document.querySelector('.search-results-section, .no-results');
//       if (resultsSection) {
//         resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     }, 100);
//   };

//   // Add to favourites
//   const handleAddToFavourites = (property) => {
//     if (!favourites.find(fav => fav.id === property.id)) {
//       setFavourites([...favourites, property]);
//       alert(`${property.location} has been added to your favourites!`);
//     } else {
//       alert('This property is already in your favourites!');
//     }
//   };

//   // Remove from favourites
//   const handleRemoveFromFavourites = (propertyId) => {
//     setFavourites(favourites.filter(fav => fav.id !== propertyId));
//   };

//   // Clear all favourites
//   const handleClearFavourites = () => {
//     if (window.confirm('Are you sure you want to clear all favourites?')) {
//       setFavourites([]);
//     }
//   };

//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         {/* Home Page with Hero Section - Route: / */}
//         <Route 
//           path="/" 
//           element={
//             <>
//               <PropertyHero onSearch={handleHeroSearch} />
//             </>
//           } 
//         />
        
//         {/* Search Properties Page - Route: /search */}
//         <Route 
//           path="/search" 
//           element={
//             <main className="main-content">
//               <div className="page-header">
//                 <h1>Search Properties</h1>
//                 <p className="page-subtitle">Find your perfect home with advanced search filters</p>
//               </div>
              
//               {/* Advanced Search Form */}
//               <div className="search-section">
//                 <SearchForm onSearch={handleSearch} />
//               </div>
              
//               {/* Favourites Bar */}
//               <div className="favourites-section">
//                 <FavouritesBar 
//                   favourites={favourites}
//                   onRemove={handleRemoveFromFavourites}
//                   onClear={handleClearFavourites}
//                 />
//               </div>
              
//               {/* Search Results */}
//               {hasSearched && (
//                 <>
//                   {searchResults.length > 0 ? (
//                     <div className="search-results-section">
//                       <h2 className="results-title">
//                         Search Results ({searchResults.length} {searchResults.length === 1 ? 'property' : 'properties'} found)
//                       </h2>
//                       <PropertiesList 
//                         properties={searchResults}
//                         onAddToFavourites={handleAddToFavourites}
//                       />
//                     </div>
//                   ) : (
//                     <div className="no-results">
//                       <h3>No properties found</h3>
//                       <p>Try adjusting your search criteria to find more properties.</p>
//                     </div>
//                   )}
//                 </>
//               )}
//             </main>
//           } 
//         />
        
//         {/* Properties List Page - Route: /property-list */}
//         <Route 
//           path="/property-list" 
//           element={
//             <main className="main-content">
//               <div className="page-header">
//                 <h1>All Properties</h1>
//                 <p className="page-subtitle">Browse our complete collection of properties</p>
//               </div>
//               <PropertiesList 
//                 onAddToFavourites={handleAddToFavourites}
//               />
//             </main>
//           } 
//         />

//         {/* Property Details Page - Route: /property/:id */}
//         <Route 
//           path="/property/:id" 
//           element={
//             <main className="main-content">
//               <PropertyDetails 
//                 onAddToFavourites={handleAddToFavourites}
//               />
//             </main>
//           } 
//         />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyHero from './components/PropertyHero';
import SearchForm from './components/SearchForm';
import FavouritesBar from './components/SearchBar';
import PropertiesList from './components/PropertiesList';
import PropertyDetails from './components/PropertyDetails';
import './App.css';

// Import properties data
import propertiesData from './data/properties.json';

function AppContent() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Convert month name to number
  const getMonthNumber = (monthName) => {
    const months = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3,
      'May': 4, 'June': 5, 'July': 6, 'August': 7,
      'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    return months[monthName] || 0;
  };

  // Handle search from hero section
  const handleHeroSearch = (searchQuery, activeTab) => {
    setHasSearched(true);
    let results = [...propertiesData.properties];

    // Filter by search query (location/postcode)
    if (searchQuery && searchQuery.trim() !== '') {
      results = results.filter(prop => 
        prop.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setSearchResults(results);

    // Scroll to results section
    setTimeout(() => {
      const resultsSection = document.querySelector('.search-results-section, .no-results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Handle search from advanced search form
  const handleSearch = (criteria) => {
    setHasSearched(true);
    let results = [...propertiesData.properties];

    // Filter by type
    if (criteria.type) {
      results = results.filter(prop => 
        prop.type.toLowerCase() === criteria.type.toLowerCase()
      );
    }

    // Filter by price range
    if (criteria.minPrice) {
      results = results.filter(prop => prop.price >= Number(criteria.minPrice));
    }
    if (criteria.maxPrice) {
      results = results.filter(prop => prop.price <= Number(criteria.maxPrice));
    }

    // Filter by bedrooms
    if (criteria.minBedrooms) {
      results = results.filter(prop => prop.bedrooms >= Number(criteria.minBedrooms));
    }
    if (criteria.maxBedrooms) {
      results = results.filter(prop => prop.bedrooms <= Number(criteria.maxBedrooms));
    }

    // Filter by postcode
    if (criteria.postcode) {
      results = results.filter(prop => 
        prop.location.toUpperCase().includes(criteria.postcode.toUpperCase())
      );
    }

    // Filter by date range
    if (criteria.dateFrom || criteria.dateTo) {
      results = results.filter(prop => {
        const propDate = new Date(
          prop.added.year, 
          getMonthNumber(prop.added.month), 
          prop.added.day
        );
        
        let matchesFrom = true;
        let matchesTo = true;
        
        if (criteria.dateFrom) {
          matchesFrom = propDate >= criteria.dateFrom;
        }
        
        if (criteria.dateTo) {
          matchesTo = propDate <= criteria.dateTo;
        }
        
        return matchesFrom && matchesTo;
      });
    }

    setSearchResults(results);

    // Scroll to results section
    setTimeout(() => {
      const resultsSection = document.querySelector('.search-results-section, .no-results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Add to favourites
  const handleAddToFavourites = (property) => {
    if (!favourites.find(fav => fav.id === property.id)) {
      setFavourites([...favourites, property]);
      alert(`${property.location} has been added to your favourites!`);
    } else {
      alert('This property is already in your favourites!');
    }
  };

  // Remove from favourites
  const handleRemoveFromFavourites = (propertyId) => {
    setFavourites(favourites.filter(fav => fav.id !== propertyId));
  };

  // Clear all favourites
  const handleClearFavourites = () => {
    if (window.confirm('Are you sure you want to clear all favourites?')) {
      setFavourites([]);
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Home Page with Hero Section - Route: / */}
        <Route 
          path="/" 
          element={
            <>
              <PropertyHero onSearch={handleHeroSearch} />
            </>
          } 
        />
        
        {/* Search Properties Page - Route: /search */}
        <Route 
          path="/search" 
          element={
            <main className="main-content">
              <div className="page-header">
                <h1>Search Properties</h1>
                <p className="page-subtitle">Find your perfect home with advanced search filters</p>
              </div>
              
              {/* Advanced Search Form */}
              <div className="search-section">
                <SearchForm onSearch={handleSearch} />
              </div>
              
              {/* Favourites Bar */}
              <div className="favourites-section">
                <FavouritesBar 
                  favourites={favourites}
                  onRemove={handleRemoveFromFavourites}
                  onClear={handleClearFavourites}
                />
              </div>
              
              {/* Search Results */}
              {hasSearched && (
                <>
                  {searchResults.length > 0 ? (
                    <div className="search-results-section">
                      <h2 className="results-title">
                        Search Results ({searchResults.length} {searchResults.length === 1 ? 'property' : 'properties'} found)
                      </h2>
                      <PropertiesList 
                        properties={searchResults}
                        onAddToFavourites={handleAddToFavourites}
                      />
                    </div>
                  ) : (
                    <div className="no-results">
                      <h3>No properties found</h3>
                      <p>Try adjusting your search criteria to find more properties.</p>
                    </div>
                  )}
                </>
              )}
            </main>
          } 
        />
        
        {/* Properties List Page - Route: /property-list */}
        <Route 
          path="/property-list" 
          element={
            <main className="main-content">
              <div className="page-header">
                <h1>All Properties</h1>
                <p className="page-subtitle">Browse our complete collection of properties</p>
              </div>
              <PropertiesList 
                onAddToFavourites={handleAddToFavourites}
              />
            </main>
          } 
        />

        {/* Property Details Page - Route: /property/:id */}
        <Route 
          path="/property/:id" 
          element={
            <main className="main-content">
              <PropertyDetails 
                onAddToFavourites={handleAddToFavourites}
              />
            </main>
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
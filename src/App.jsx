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

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import PropertiesList from './components/PropertiesList';
import PropertyDetails from './components/PropertyDetails';
import './App.css';

// Home page showing only the search form
const Home = () => (
  <div className="home-page">
    <SearchForm />
  </div>
);

function App() {
  const handleAddToFavourites = (property) => {
    console.log('Added to favourites:', property);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/property-list"
          element={
            <PropertiesList onAddToFavourites={handleAddToFavourites} />
          }
        />

        <Route
          path="/property/:id"
          element={
            <PropertyDetails onAddToFavourites={handleAddToFavourites} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

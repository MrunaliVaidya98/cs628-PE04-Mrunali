import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';
import './App.css';

function App() {
  const [cities, setCities] = useState([
    {
      id: 1,
      name: 'Seattle',
      country: 'USA',
      population: '733,919',
      details: 'Seattle is known for the Space Needle, technology companies, and coffee culture.'
    },
    {
      id: 2,
      name: 'New York',
      country: 'USA',
      population: '8,258,035',
      details: 'New York City is known for Times Square, Central Park, and Wall Street.'
    }
  ]);

  function addCity(newCity) {
    setCities([...cities, newCity]);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>Cities Application</h1>
          <nav>
            <Link to="/">Cities List</Link>
            <Link to="/add-city">Add City</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<CitiesList cities={cities} />}>
              <Route path="city/:id" element={<CityDetails cities={cities} />} />
            </Route>
            <Route path="/add-city" element={<AddCity addCity={addCity} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
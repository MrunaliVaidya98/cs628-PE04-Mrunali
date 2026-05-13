import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function CitiesList({ cities }) {
  return (
    <div className="card">
      <h2>Cities List</h2>
      <p>Click on a city to view its details.</p>

      <ul className="city-list">
        {cities.map((city) => (
          <li key={city.id}>
            <Link to={`city/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default CitiesList;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ addCity }) {
  const navigate = useNavigate();

  const [city, setCity] = useState({
    name: '',
    country: '',
    population: '',
    details: ''
  });

  function handleChange(e) {
    setCity({
      ...city,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newCity = {
      id: Date.now(),
      name: city.name,
      country: city.country,
      population: city.population,
      details: city.details
    };

    addCity(newCity);
    navigate('/');
  }

  return (
    <div className="card">
      <h2>Add City</h2>

      <form onSubmit={handleSubmit}>
        <label>City Name:</label>
        <input
          type="text"
          name="name"
          value={city.name}
          onChange={handleChange}
          required
        />

        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={city.country}
          onChange={handleChange}
          required
        />

        <label>Population:</label>
        <input
          type="text"
          name="population"
          value={city.population}
          onChange={handleChange}
          required
        />

        <label>Details:</label>
        <textarea
          name="details"
          value={city.details}
          onChange={handleChange}
          required
        />

        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;
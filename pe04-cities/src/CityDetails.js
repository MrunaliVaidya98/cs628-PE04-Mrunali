import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetails({ cities }) {
  const { id } = useParams();
  const city = cities.find((item) => item.id === Number(id));

  if (!city) {
    return <p>City not found.</p>;
  }

  return (
    <div className="details">
      <h2>{city.name} Details</h2>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
      <p><strong>Details:</strong> {city.details}</p>
    </div>
  );
}

export default CityDetails;
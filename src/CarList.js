import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance'; // Adjust path as per your Axios instance setup

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/getCar') // Adjust endpoint as per your backend API
      .then(res => {
        setCars(res.data);
      })
      .catch(err => {
        console.error('Error fetching cars:', err);
      });
  }, []);

  return (
    <div>
      <h2>List of Cars</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <strong>{car.company}</strong> - {car.modelName} ({car.price})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
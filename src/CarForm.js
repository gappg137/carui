import React, { useState } from 'react';
import axiosInstance from './axiosInstance'; // Adjust path as per your Axios instance setup

const CarForm = () => {
  const [car, setCar] = useState({
    company: '',
    modelName: '',
    price: 0.0
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosInstance.post('/api/addCar', car) // Adjust endpoint as per your backend API
      .then(res => {
        console.log('Car added:', res.data);
        // Optionally reset form fields or update state
        setCar({
          company: '',
          modelName: '',
          price: 0.0
        });
      })
      .catch(err => {
        console.error('Error adding car:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="company" placeholder="Company" value={car.company} onChange={handleChange} required />
      <input type="text" name="modelName" placeholder="Model Name" value={car.modelName} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={car.price} onChange={handleChange} required />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;
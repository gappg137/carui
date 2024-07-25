import React from 'react';
import './App.css';
import CarForm from './CarForm'
import CarList from './CarList';

function App() {
  return (
    <div className="App">
      <h1>Car Showroom</h1>
      <CarForm />
      <CarList />
    </div>
  );
}

export default App;
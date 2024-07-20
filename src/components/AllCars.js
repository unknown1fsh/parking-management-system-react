import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:8087/api/cars');
        setCars(response.data);
      } catch (error) {
        setMessage('Bir hata oluştu: ' + (error.response ? error.response.data.message : error.message));
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="container">
      <h2>Tüm Araçlar</h2>
      {message && <p>{message}</p>}
      <ul className="list-group">
        {cars.map((car) => (
          <li key={car.id} className="list-group-item">{car.plateNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllCars;
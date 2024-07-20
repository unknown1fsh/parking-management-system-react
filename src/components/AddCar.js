import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Doğru yolu belirttik

function AddCar() {
  const [plateNumber, setPlateNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8087/api/cars', { plateNumber });
      setMessage(`Plaka başarıyla eklendi. Kapasite durumu: ${response.data.availableSlots}`);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(`Bir hata oluştu: ${error.response.data.message}`);
      } else {
        setMessage('Bir hata oluştu.');
      }
    }
  };

  const handlePlateNumberChange = (event) => {
    const value = event.target.value.toUpperCase();
    if (value.length <= 9) {
      setPlateNumber(value);
    }
  };

  return (
    <div className="container">
      <h2>Araç Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Plaka Numarası:</label>
          <input
            type="text"
            className="form-control"
            value={plateNumber}
            onChange={handlePlateNumberChange}
            maxLength={9} // 9 karakter sınırı
          />
        </div>
        <button type="submit" className="btn btn-primary">Ekle</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddCar;
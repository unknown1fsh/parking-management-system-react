import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const AvailableSlots = () => {
  const [slots, setSlots] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await axios.get('http://localhost:8087/api/slots');
        setSlots(response.data);
      } catch (error) {
        setMessage('Bir hata oluştu: ' + (error.response ? error.response.data.message : error.message));
      }
    };

    fetchSlots();
  }, []);

  return (
    <div className="container">
      <h2>Boş Yerler</h2>
      {message && <p>{message}</p>}
      {slots !== null ? (
        <p>Boş Yer Sayısı: {slots}</p>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
};

export default AvailableSlots;
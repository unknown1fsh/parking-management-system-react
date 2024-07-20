import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddCar from './components/AddCar';
import RemoveCar from './components/RemoveCar';
import AllCars from './components/AllCars';
import AvailableSlots from './components/AvailableSlots';
import './App.css'; // Düzeltilmiş yol

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Otopark Yönetim Sistemi</h1>
          <nav>
            <ul>
              <li>
                <Link to="/add-car">Araç Ekle</Link>
              </li>
              <li>
                <Link to="/remove-car">Araç Sil</Link>
              </li>
              <li>
                <Link to="/all-cars">Tüm Araçlar</Link>
              </li>
              <li>
                <Link to="/available-slots">Boş Yerler</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/remove-car" element={<RemoveCar />} />
          <Route path="/all-cars" element={<AllCars />} />
          <Route path="/available-slots" element={<AvailableSlots />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
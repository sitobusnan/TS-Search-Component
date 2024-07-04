import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<Search />} />
          {/* Añade más rutas aquí según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
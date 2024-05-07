import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import Register from './components/RegisterPage';
import Login from './components/LoginPage';
import InvestigadorDashboard from './dashboards/InvestigadorDashboard';
import TecnicoDashboard from './dashboards/TecnicoDashboard';
import AdministrativoDashboard from './dashboards/AdministrativoDashboard';
import AdminDashboard from './dashboards/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/investigador/dashboard" element={<InvestigadorDashboard />} />
        <Route path="/tecnico/dashboard" element={<TecnicoDashboard />} />
        <Route path="/administrativo/dashboard" element={<AdministrativoDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

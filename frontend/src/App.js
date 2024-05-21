import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/HomePage';
import Register from './components/RegisterPage';
import Login from './components/LoginPage';
import InvestigadorDashboard from './dashboards/InvestigadorDashboard';
import TecnicoDashboard from './dashboards/TecnicoDashboard';
import AdministrativoDashboard from './dashboards/AdministrativoDashboard';
import AdminDashboard from './dashboards/AdminDashboard';
import { AuthProvider, useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component, allowedRoles }) => {
  const { auth } = useAuth();
  
  return (
    auth.token && allowedRoles.includes(parseInt(auth.role))
      ? <Component />
      : <Navigate to="/login" />
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/investigador/dashboard" element={<ProtectedRoute element={InvestigadorDashboard} allowedRoles={[2]} />} />
          <Route path="/tecnico/dashboard" element={<ProtectedRoute element={TecnicoDashboard} allowedRoles={[3]} />} />
          <Route path="/administrativo/dashboard" element={<ProtectedRoute element={AdministrativoDashboard} allowedRoles={[4]} />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute element={AdminDashboard} allowedRoles={[1]} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

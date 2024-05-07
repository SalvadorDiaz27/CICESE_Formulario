import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RegistroForm from '../components/Formulario';

const InvestigadorDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No se encontró ningún token en el almacenamiento local');
    } else {
      console.log('Token encontrado:', token);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); 

    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3>Bienvenido al Dashboard de Investigador</h3>
            </div>
            <div className="card-body">
              <p>¡Hola, usuario! Bienvenido al dashboard de investigador.</p>
              <RegistroForm />
            </div>
            <div className="card-footer text-end">
              <Button variant="primary" onClick={handleLogout}>Cerrar Sesión</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigadorDashboard;

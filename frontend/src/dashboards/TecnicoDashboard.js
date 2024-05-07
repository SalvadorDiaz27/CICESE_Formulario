import React from 'react';
import { Button } from 'react-bootstrap';

const InvestigadorDashboard = () => {
  const handleLogout = () => {
  
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3>Bienvenido al Dashboard de Tecnicos</h3>
            </div>
            <div className="card-body">
              <p>¡Hola, usuario! Bienvenido al dashboard de Tecnicos.</p>
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

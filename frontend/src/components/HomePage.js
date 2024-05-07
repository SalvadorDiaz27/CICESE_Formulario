import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="jumbotron">
              <h1 className="display-4 mb-4">Bienvenido a nuestra plataforma de prueba</h1>
              <p className="lead">Un lugar donde puedes acceder a recursos y herramientas para tu investigación.</p>
              <hr className="my-4" />
              <p>Regístrate o inicia sesión para empezar a explorar.</p>
              <div className="mt-5">
                <Link to="/login" className="btn btn-primary btn-lg mr-3">Iniciar Sesión</Link>
                <Link to="/register" className="btn btn-primary btn-lg ml-3">Registro</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    try {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
      const response = await axios.post('http://localhost:8000/api/login', formData, {
        withCredentials: false
      });
  
      const { role, token } = response.data;
      console.log('Role:', role);
      console.log('Token:', token);
  
      if (token) {
        localStorage.setItem('token', token);
        console.log('Token guardado en el almacenamiento local');
  
        if (role === 1) {
          console.log('Redirigiendo a /admin/dashboard');
          window.location.href = '/admin/dashboard';
        } else if (role === 2) {
          console.log('Redirigiendo a /investigador/dashboard');
          window.location.href = '/investigador/dashboard';
        } else if (role === 3) {
          console.log('Redirigiendo a /tecnico/dashboard');
          window.location.href = '/tecnico/dashboard';
        } else if (role === 4) {
          console.log('Redirigiendo a /administrativo/dashboard');
          window.location.href = '/administrativo/dashboard';
        }
      }
  
      setSuccessMessage(`Inicio de sesión exitoso. Rol: ${role}`);
  
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.status === 401) {
        setErrorMessage('Credenciales inválidas. Por favor, inténtalo de nuevo.');
      } else {
        setErrorMessage('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      }
    }
  };

  const handleCloseErrorMessage = () => {
    setErrorMessage('');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">  
            <div className="card-header">
              <h3 className="mb-0">Inicio de Sesión</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {errorMessage}
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseErrorMessage}></button>
                  </div>
                )}
                {successMessage && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    {successMessage}
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setSuccessMessage('')}></button>
                  </div>
                )}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
              </form>
            </div>
            <div className="card-footer text-center">
              <p className="mb-0">¿No tienes una cuenta? <Link to="/register">Registrarse</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

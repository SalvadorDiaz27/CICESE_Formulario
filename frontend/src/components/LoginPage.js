import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Ingresa un correo electrónico válido.');
      return;
    }

    const specialCharRegex = /[!#$%^&*(),?":{}|<>]/;
    if (specialCharRegex.test(formData.email)) {
      setErrorMessage('El correo electrónico no debe contener caracteres especiales.');
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
      const response = await axios.post('http://localhost:8000/api/login', formData, {
        withCredentials: false
      });

      const { role, token } = response.data;

      if (token) {
        login(token, role);

        if (role === 1) {
          navigate('/admin/dashboard');
        } else if (role === 2) {
          navigate('/investigador/dashboard');
        } else if (role === 3) {
          navigate('/tecnico/dashboard');
        } else if (role === 4) {
          navigate('/administrativo/dashboard');
        }
      }

      setSuccessMessage(`Inicio de sesión exitoso. Rol: ${role}`);
    } catch (error) {
      console.error('Error:', error);
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        setErrorMessage('Credenciales inválidas o el usuario no existe. Por favor, inténtalo de nuevo.');
      } else {
        setErrorMessage('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      }
    } else if (error.request) {
      setErrorMessage('No se pudo conectar con la base de datos. Por favor, inténtalo de nuevo más tarde.');
    } else {
      setErrorMessage('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
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
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
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

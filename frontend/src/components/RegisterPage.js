import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage('Por favor, completa todos los campos.');
      setSuccessMessageVisible(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido.');
      setSuccessMessageVisible(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', formData);
      console.log(response.data);
      setSuccessMessageVisible(true);
      setErrorMessage('');
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.status === 422) {
        setErrorMessage('El usuario ya está registrado.');
      } else {
        setErrorMessage('Error al registrar el usuario. Por favor, inténtalo de nuevo.');
      }
      setSuccessMessageVisible(false);
    }
  };

  const handleCloseSuccessMessage = () => {
    setSuccessMessageVisible(false);
  };

  const handleCloseErrorMessage = () => {
    setErrorMessage('');
  };

  const validateEmail = (email) => {
    // Expresión regular para validar el formato de un correo electrónico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">Registro</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {errorMessage}
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseErrorMessage}></button>
                  </div>
                )}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                  <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
              </form>
            </div>
            <div className="card-footer text-center">
              <p className="mb-0">¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
            </div>
          </div>
        </div>
      </div>
      {successMessageVisible && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Usuario registrado satisfactoriamente.
          <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseSuccessMessage}></button>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  const [registros, setRegistros] = useState([]);
  const [registroSeleccionado, setRegistroSeleccionado] = useState(null);
  const [edicionAbierta, setEdicionAbierta] = useState(false);
  const [registroEditable, setRegistroEditable] = useState(null);
  const [alerta, setAlerta] = useState({ tipo: null, mensaje: null });
  const [modalVisible, setModalVisible] = useState(false);
  const [registroAEliminar, setRegistroAEliminar] = useState(null);

  useEffect(() => {
    cargarRegistros();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No se encontró ningún token en el almacenamiento local');
    } else {
      console.log('Token encontrado:', token);
    }
  }, []);

  const handleCerrarSesion = () => {
    localStorage.removeItem('token'); 

    navigate('/login');
  };

  const cargarRegistros = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/registros');
      const data = await response.json();
      setRegistros(data);
    } catch (error) {
      console.error('Error al cargar los registros:', error);
    }
  };

  const verDetalles = (registro) => {
    setRegistroSeleccionado(registro);
  };

  const editarRegistro = (registro) => {
    setRegistroEditable({ ...registro });
    setEdicionAbierta(true);
  };

  const handleCloseEdicion = () => {
    setEdicionAbierta(false);
    setRegistroEditable(null);
    setAlerta({ tipo: null, mensaje: null });
  };

  const handleSubmitEdicion = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/updateregistro/${registroEditable.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registroEditable),
      });
      if (response.ok) {
        console.log('Registro editado:', registroEditable);
        cargarRegistros();
        handleCloseEdicion();
        setAlerta({ tipo: 'success', mensaje: 'Se realizó el cambio correctamente.' });
      } else {
        console.error('Error al editar el registro:', response.statusText);
        setAlerta({ tipo: 'danger', mensaje: 'Error al realizar el cambio.' });
      }
    } catch (error) {
      console.error('Error al editar el registro:', error);
      setAlerta({ tipo: 'danger', mensaje: 'Error al realizar el cambio.' });
    }
  };

  const mostrarModalConfirmacion = (registro) => {
    setRegistroAEliminar(registro);
    setModalVisible(true);
  };

  const confirmarEliminarRegistro = async () => {
    if (registroAEliminar) {
      try {
        const response = await fetch(`http://localhost:8000/api/registros/${registroAEliminar.id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          console.log('Registro eliminado:', registroAEliminar.id);
          cargarRegistros();
          setModalVisible(false);
        } else {
          console.error('Error al eliminar el registro:', response.statusText);
        }
      } catch (error) {
        console.error('Error al eliminar el registro:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Administrador de Registros</h1>
      <div className="row">
        <div className="col-md-12">
        <button className="btn btn-danger float-end mb-3" onClick={handleCerrarSesion}>Cerrar Sesión</button>
          <table className="table table-striped mb-5">
            <thead>
              <tr>
                <th>Nombre del Solicitante</th>
                <th>Instituto</th>
                <th>Proyecto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((registro) => (
                <tr key={registro.id}>
                  <td>{registro.nombre}</td>
                  <td>{registro.instituto}</td>
                  <td>{registro.proyecto}</td>
                  <td>
                    <button className="btn btn-primary me-2" onClick={() => verDetalles(registro)}>Ver Detalles</button>
                    <button className="btn btn-success me-2" onClick={() => editarRegistro(registro)}>Editar</button>
                    <button className="btn btn-danger" onClick={() => mostrarModalConfirmacion(registro)}>Borrar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalVisible && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar Eliminación</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setModalVisible(false)}></button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de querer eliminar el registro?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setModalVisible(false)}>Cancelar</button>
                <button type="button" className="btn btn-danger" onClick={confirmarEliminarRegistro}>Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {registroSeleccionado && (
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="card mb-5">
              <div className="card-header text-center">Detalles del Registro</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <strong>Nombre del Solicitante:</strong> {registroSeleccionado.nombre}
                  </div>
                  <div className="col-md-4">
                    <strong>Instituto:</strong> {registroSeleccionado.instituto}
                  </div>
                  <div className="col-md-4">
                    <strong>Proyecto:</strong> {registroSeleccionado.proyecto}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <strong>Periodo de estancia:</strong> {registroSeleccionado.fecha_inicio} a {registroSeleccionado.fecha_fin}
                  </div>
                  <div className="col-md-4">
                    <strong>Tipo de estancia:</strong> {registroSeleccionado.tipoEstancia}
                  </div>
                  <div className="col-md-4">
                    <strong>Solicitud:</strong> <input type="checkbox" disabled checked={registroSeleccionado.solicitud} />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <strong>CVU:</strong> {registroSeleccionado.cvu}
                  </div>
                  <div className="col-md-4">
                    <strong>País:</strong> {registroSeleccionado.pais}
                  </div>
                  <div className="col-md-4">
                    <strong>Teléfono:</strong> {registroSeleccionado.telefono}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <strong>Correo:</strong> {registroSeleccionado.correo}
                  </div>
                  <div className="col-md-4">
                    <strong>Responsable:</strong> {registroSeleccionado.responsable}
                  </div>
                  <div className="col-md-4">
                    <strong>Justificación:</strong> {registroSeleccionado.justificacion}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <strong>CURP:</strong> {registroSeleccionado.curp}
                  </div>
                </div>
                <button className="btn btn-secondary mt-3 float-end" onClick={() => setRegistroSeleccionado(null)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {edicionAbierta && registroEditable && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Registro</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseEdicion}></button>
              </div>
              <div className="modal-body">
                {alerta.tipo && (
                  <div className={`alert alert-${alerta.tipo}`} role="alert">
                    {alerta.mensaje}
                  </div>
                )}
                <form>
                  <div className="row">
                    {Object.keys(registroEditable).map((key) => {
                      if (key !== 'created_at' && key !== 'updated_at' && key !== 'id') {
                        return (
                          <div key={key} className="col-md-4 mb-3">
                            <label htmlFor={key} className="form-label">{key === 'fecha_inicio' ? 'Fecha de Inicio' : key === 'fecha_fin' ? 'Fecha de Terminación' : key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                            {key === 'fecha_inicio' || key === 'fecha_fin' ? (
                              <input type="date" className="form-control" id={key} value={registroEditable[key]} onChange={(e) => setRegistroEditable({ ...registroEditable, [key]: e.target.value })} />
                            ) : key === 'solicitud' ? (
                              <input type="checkbox" className="form-check-input" id={key} checked={registroEditable[key]} onChange={(e) => setRegistroEditable({ ...registroEditable, [key]: e.target.checked })} />
                            ) : key === 'tipoEstancia' ? (
                              <select className="form-select" id={key} value={registroEditable[key]} onChange={(e) => setRegistroEditable({ ...registroEditable, [key]: e.target.value })}>
                                <option value="Posdoctoral">Posdoctoral</option>
                                <option value="Sabática">Sabática</option>
                                <option value="Investigador(a) por México">Investigador(a) por México</option>
                                <option value="Estancia académica">Estancia académica</option>
                                <option value="Investigador por honorarios">Investigador por honorarios</option>
                              </select>
                            ) : (
                              <input type="text" className="form-control" id={key} value={registroEditable[key]} onChange={(e) => setRegistroEditable({ ...registroEditable, [key]: e.target.value })} />
                            )}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseEdicion}>Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmitEdicion}>Guardar Cambios</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;

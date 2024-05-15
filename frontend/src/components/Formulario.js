import React, { useState } from 'react';

function RegistroForm() {
  const [nombre, setNombre] = useState('');
  const [cvu, setCvu] = useState('');
  const [instituto, setInstituto] = useState('');
  const [pais, setPais] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [tipoEstancia, setTipoEstancia] = useState('');
  const [responsable, setResponsable] = useState('');
  const [proyecto, setProyecto] = useState('');
  const [justificacion, setJustificacion] = useState('');
  const [fecha_inicio, setFechaInicio] = useState('');
  const [fecha_fin, setFechaFin] = useState('');
  const [curp, setCurp] = useState('');
  const [solicitud, setSolicitud] = useState('no'); 
  const [mensaje, setMensaje] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (!nombre || !cvu || !instituto || !pais || !telefono || !correo || !tipoEstancia || !responsable || !proyecto || !justificacion || !fecha_inicio || !fecha_fin || !curp) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }

    // Validación del CURP
    if (curp.length !== 18) {
      setMensaje('El CURP debe tener 18 caracteres.');
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/addregistro", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          cvu,
          instituto,
          pais,
          telefono,
          correo,
          tipoEstancia,
          responsable,
          proyecto,
          justificacion,
          fecha_inicio,
          fecha_fin,
          curp,
          solicitud
        })
      });

      if (response.ok) {
        setMensaje('Registro enviado correctamente');
      } else {
        setMensaje('Error al enviar el registro');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMensaje('Error al enviar el formulario');
    }
  }

  return (
    <div className="container">
      <h1 className="mt-5">Formulario de Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mt-4">
          <div className="col-md-6">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <input type="text" id="nombre" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="cvu" className="form-label">CVU:</label>
            <input type="text" id="cvu" className="form-control" value={cvu} onChange={(e) => setCvu(e.target.value)} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <label htmlFor="instituto" className="form-label">Instituto:</label>
            <input type="text" id="instituto" className="form-control" value={instituto} onChange={(e) => setInstituto(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="pais" className="form-label">País:</label>
            <input type="text" id="pais" className="form-control" value={pais} onChange={(e) => setPais(e.target.value)} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <label htmlFor="telefono" className="form-label">Teléfono:</label>
            <input type="text" id="telefono" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="correo" className="form-label">Correo:</label>
            <input type="email" id="correo" className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <label htmlFor="tipoEstancia" className="form-label">Tipo de Estancia:</label>
            <select id="tipoEstancia" className="form-select" value={tipoEstancia} onChange={(e) => setTipoEstancia(e.target.value)}>
              <option value="">Selecciona el tipo de estancia</option>
              <option value="Posdoctoral">Posdoctoral</option>
              <option value="Sabática">Sabática</option>
              <option value="Investigador(a) por México">Investigador(a) por México</option>
              <option value="Estancia académica">Estancia académica</option>
              <option value="Investigador por honorarios">Investigador por honorarios</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="responsable" className="form-label">Responsable:</label>
            <input type="text" id="responsable" className="form-control" value={responsable} onChange={(e) => setResponsable(e.target.value)} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <label htmlFor="proyecto" className="form-label">Proyecto:</label>
            <input type="text" id="proyecto" className="form-control" value={proyecto} onChange={(e) => setProyecto(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="justificacion" className="form-label">Justificación:</label>
            <textarea id="justificacion" className="form-control" rows="3" value={justificacion} onChange={(e) => setJustificacion(e.target.value)}></textarea>
          </div>
        </div>
        <div className="row mt-4">
        <div className="col-md-6">
            <label htmlFor="fecha_inicio" className="form-label">Fecha de Inicio:</label>
            <input
            type="date"
            id="fecha_inicio"
            className="form-control"
            value={fecha_inicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            />
        </div>
        <div className="col-md-6">
            <label htmlFor="fecha_fin" className="form-label">Fecha de Fin:</label>
            <input
            type="date"
            id="fecha_fin"
            className="form-control"
            value={fecha_fin}
            onChange={(e) => setFechaFin(e.target.value)}
            />
        </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <label htmlFor="curp" className="form-label">CURP:</label>
            <input type="text" id="curp" className="form-control" value={curp} onChange={(e) => setCurp(e.target.value)} />
          </div>
          <div className="col-md-6">
            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" id="solicitud" checked={solicitud === 'si'} onChange={(e) => setSolicitud(e.target.checked ? 'si' : 'no')} />
              <label className="form-check-label" htmlFor="solicitud">
                Solicitud de correo electrónico:
              </label>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
      {mensaje && <p className="text-center mt-3">{mensaje}</p>}
    </div>
  );
}

export default RegistroForm;

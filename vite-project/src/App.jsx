import { useState, useEffect } from 'react'
import Layout from '../components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import { Lista_Alumnos, Detalles, Editar } from '../components/Lista_Alumnos';
import AgregarAlumno from '../components/AgregarAlumno';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Lista-Alumnos' element={<Lista_Alumnos />} />
          <Route path='Lista-Alumnos/:id' element={<Detalles />} />
          <Route path='Lista-Alumnos/:id/editar' element={<Editar />} />
          <Route path='Nuevo-Alumno' element={<AgregarAlumno />} />
          <Route path='Nosotros' element={<h1>Nosotros</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { Listado_Alumnos as lista } from "/components/Listado_alumnos";
import { Lista_Alumnos, Detalles, Editar } from '../components/Lista_Alumnos'
import Layout from '../components/Layout'
import Home from '../components/Home'

function App(){
  const [Lista, setLista] = useState([]);
  useEffect(() => {
        setLista(lista);
  }, []);

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route index element={ <Home/>}/>
          <Route path='Lista-Alumnos' element= {<Lista_Alumnos Lista={Lista} setLista={setLista}/>}/>
          <Route path='Lista-Alumnos/:id' element={<Detalles Lista={Lista} setLista={setLista}/>}/>
          <Route path='Nosotros' element={<h1>Nosotros</h1>}/>
          <Route path="Lista-Alumnos/:id/editar" element={<Editar Lista={Lista} setLista={setLista}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

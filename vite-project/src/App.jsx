import { useState } from 'react'
import Layout from '../components/Layout'
import { Routes, Route } from 'react-router'
import Home from '../components/Home'
import { Lista_Alumnos, Detalles } from '../components/Lista_Alumnos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route index element={ <Home/>}/>
          <Route path='Lista-Alumnos' element= {<Lista_Alumnos/>}/>
          <Route path='Lista-Alumnos/:id' element={<Detalles/>}/>
          <Route path='Nosotros' element={<h1>Nosotros</h1>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App

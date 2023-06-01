import { useState } from 'react'
import Formulario from './components/Formulario'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='div_container'>
        <h1>Carga de Estudiantes</h1>
        <Formulario/>
        <Card/>
      </div>
    </>
  )
}

export default App

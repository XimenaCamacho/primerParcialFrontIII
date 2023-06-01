import { useState } from 'react'
import Formulario from './components/Formulario'
import Card from './components/Card'
import './App.css'

function App() {
  const [data, setData] = useState()

  return (
    <>
      <div className='div_container'>
        <h1>Carga de Estudiantes</h1>
        <Formulario onSubmit={setData}/>
        {data ? <Card data={data} />: null}
      </div>
    </>
  )
}

export default App

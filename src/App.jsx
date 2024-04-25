import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import './App.css'
import Navegacion from './components/Navegacion'
import Busqueda from './components/Busqueda'
import Vuelo from './components/Vuelo'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const Vuelos = [
    <Vuelo key="1" origen="Bogota (BOG)" destino="San Jose de Costa Rica"/>,
    <Vuelo key="2" origen="Bogota (BOG)" destino="San Jose de Costa Rica"/>
  ]

  return (
    <>
      <Navegacion/>
      <Busqueda />
      <div className='ContenedorVuelos'>
        <div>
          {Vuelos}
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navegacion from './components/Navegacion'
import Busqueda from './components/Busqueda'
import Vuelo from './components/Vuelo'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const Vuelos = [
    <Vuelo />,
    <Vuelo />,
    <Vuelo />
  ]

  return (
    <>
      <Navegacion/>
      <Busqueda />
      <div>
        {Vuelos}
      </div>
    </>
  )
}

export default App

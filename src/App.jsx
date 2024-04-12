import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navegacion from './components/Navegacion'
import Busqueda from './components/Busqueda'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <>
      <Navegacion/>
      <Busqueda />
      <h1>Bienvenido a TravelApp</h1>
      <div>
        <ul>
          <li>Vuelo 1</li>
          <li>Vuelo 2</li>
          <li>vuelo 3</li>
        </ul>
      </div>
    </>
  )
}

export default App

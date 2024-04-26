import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Navegacion from './components/Navegacion';
import Busqueda from './components/Busqueda';
import Vuelo from './components/Vuelo';

function App() {
  const [vuelos, setVuelos] = useState([]);
  const navigate = useNavigate();

  const buscarVuelos = async (origen, destino, fechaIda) => {
    try {
      const response = await axios.get('http://localhost:3000/buscarVuelos', {
        params: {
          origen: origen,
          destino: destino,
          fecha: fechaIda,
        }
      });
      const nuevosVuelos = [];
      for (let i = 0; i < response.data.data.length; i++) {
        const vueloData = response.data.data[i];
        const vueloComponent = <Vuelo key={i} origen={`${vueloData.itineraries[0].segments[0].departure.iataCode}`} destino={`${vueloData.itineraries[0].segments[0].arrival.iataCode}`} precio={vueloData.price.total * 3902} hora={vueloData.itineraries[0].segments[0].departure.at}/>;
        nuevosVuelos.push(vueloComponent);
      }
      setVuelos(nuevosVuelos);
    } catch (error) {
      console.error('Error al buscar vuelos:', error);
    }
  };

  return (
    <>
      <Navegacion/>
      <Busqueda onBuscarClick={buscarVuelos}/>
      <div className='ContenedorVuelos'>
        <div>
          {vuelos}
        </div>
      </div>
    </>
  );

}

export default App;

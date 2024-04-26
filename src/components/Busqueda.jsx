import { useState } from 'react';
import './stylesBusqueda.css';

export default function Busqueda({ onBuscarClick }) {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fechaIda, setFechaIda] = useState('');
  const [fechaVuelta, setFechaVuelta] = useState('');

  const handleBuscarClick = () => {
    onBuscarClick(origen, destino, fechaIda);
  };

  return (
    <div className="DatosBusqueda">
      <div className="DatosLugar">
        <label htmlFor="origen">Origen</label>
        <input type="text" name="origen" id="origen" value={origen} onChange={(e) => setOrigen(e.target.value)} />
        <label htmlFor="destino">Destino</label>
        <input type="text" name="destino" id="destino" value={destino} onChange={(e) => setDestino(e.target.value)} />
      </div>

      <div className="DatosLugar">
        <label htmlFor="fecha-ida">Fecha ida</label>
        <input type="date" name="fechaIda" id="fecha-ida" value={fechaIda} onChange={(e) => setFechaIda(e.target.value)} />
        <label htmlFor="fecha-vuelta">Fecha vuelta</label>
        <input type="date" name="fechaVuelta" id="fecha-vuelta" value={fechaVuelta} onChange={(e) => setFechaVuelta(e.target.value)} />
      </div>

      <button onClick={handleBuscarClick}>Buscar</button>
    </div>
  );
}

import './stylesBusqueda.css';
export default function Busqueda(){


    
    return(
        <>
            <div className="DatosBusqueda">
                <div className="DatosLugar">
                    <label htmlFor="">Origen</label>
                    <input type="text" name="origen" id="origen" />
                    <label htmlFor="">Destino</label>
                    <input type="text" name="destino" id="destino" />
                </div>

                <div className="DatosLugar">
                    <label htmlFor="">Fecha ida</label>
                    <input type="date" name="fechai" id="fecha-ida"/>
                    <label htmlFor="">Fecha vuelta</label>
                    <input type="date" name="fechav" id="fecha-vuelta" /> 
                </div>
                  
                <button>Buscar</button>    
            </div>
        </>
    )
}
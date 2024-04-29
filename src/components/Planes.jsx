import './stylesPlanes.css';
import Navegacion from './Navegacion';
export default function Planes(){
        const nom1 = 'Cataratas la fortuna'; 
        const hora1 = '9:00 - 10:00 am';
        const activ = 'Actividades a realizar:';
        const ac1 = 'Observación de aves';
        const ac2 = 'Toma de fotografias en las cataratas';
        const rest = 'Restricciones:'
        const res1 = 'No tener discapacidad de movilidad';
        const res2 = 'No hay agua en invierno';
        const prec1 = '10.000 COP';
        const indi = '* No incluye precio del transporte';
        const nom2 = 'Rio Celeste';
        const hora2 = 'Todo el dia';
        const ac3 = 'Bañarse en el rio';
        const ac4 = 'Caminata ecologica';
        const res3 = 'No tener discapacidad de movilidad';
        const nom3 = 'Poas Volcano';
        const hora3 = '7:00 am - 1:15 pm';
        const ac5 = 'Caminata por bosque nubloso';
        const ac6 = 'Caminata ecologica';
        const ac7 = 'Visita al volcan';
    return(
        <>
            <Navegacion/>
            <div className="DatosBusqueda">
                <div className="DatosLugar">
                    <label htmlFor="">Origen</label>
                    <input type="text" name="origen" id="origen" />
                </div>

                <div className="DatosLugar">
                    <label htmlFor="">Fecha</label>
                    <input type="date" name="fechai" id="fecha-ida"/>
                   
                </div>
                  
                <div className="DatosLugar">
                    <label htmlFor="">Hora inicio</label>
                    <input type="text" name="horaini" id="horaini" />
                    <label htmlFor="">Hora fin</label>
                    <input type="text" name="horafin" id="horafin" />
                </div>
                
                <button>Buscar</button>    
            </div>
            <div className="ContenedorPlan">
                <div className="EstiloPlan">
                    <h5>
                    <h4><b>{nom1}</b></h4>
                    <h4>{hora1}</h4>
                    </h5>
                    <img src="https://th.bing.com/th/id/OIP.8ZUU8rrimav3K6JfHohCnQHaE8?w=288&h=192&c=7&r=0&o=5&pid=1.7" alt="Catarata de la fortuna" />
                    <h5>
                    <h4><b>{activ}</b></h4>
                    <h4>{ac1}</h4>
                    <h4>{ac2}</h4>
                    </h5>
                    <h5>
                    <h4><b>{rest}</b></h4>
                    <h4>{res1}</h4>
                    <h4>{res2}</h4>
                    </h5>
                    <h5>
                    <h4>{prec1}</h4>
                    <h4>{indi}</h4>
                    </h5>
                </div>
            </div>

            <div className="ContenedorPlan">
                <div className="EstiloPlan">
                    <h5>
                    <h4><b>{nom2}</b></h4>
                    <h4>{hora2}</h4>
                    </h5>
                    <img src="https://th.bing.com/th/id/OIP.WBZGlVoJWivObZbzRLrJgAHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7" alt="Rio celeste" />
                    <h5>
                    <h4><b>{activ}</b></h4>
                    <h4>{ac3}</h4>
                    <h4>{ac4}</h4>
                    </h5>
                    <h5>
                    <h4><b>{rest}</b></h4>
                    <h4>{res3}</h4>
                    </h5>
                    <h5>
                    <h4>{prec1}</h4>
                    <h4>{indi}</h4>
                    </h5>
                </div>
            </div>

            <div className="ContenedorPlan">
                <div className="EstiloPlan">
                    <h5>
                    <h4><b>{nom3}</b></h4>
                    <h4>{hora3}</h4>
                    </h5>
                    <img src="https://th.bing.com/th/id/OIP.fzOAcQUv1HO6xXKn9eb9UQHaFj?w=243&h=182&c=7&r=0&o=5&pid=1.7" alt="Poas Volcano" />
                    <h5>
                    <h4><b>{activ}</b></h4>
                    <h4>{ac5}</h4>
                    <h4>{ac6}</h4>
                    <h4>{ac7}</h4>
                    </h5>
                    <h5>
                    <h4><b>{rest}</b></h4>
                    <h4>{res3}</h4>
                    </h5>
                    <h5>
                    <h4>{prec1}</h4>
                    <h4>{indi}</h4>
                    </h5>
                </div>
            </div>
        </>
    )
}

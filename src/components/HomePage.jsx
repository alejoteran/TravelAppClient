import Navegacion from "./Navegacion"
import "./stylesHome.css"
export default function HomePage(){
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
            <h1>Bienvenido a TravelApp</h1>
            <div className="Contenedor">
                <div className="ConVuelo">
                    <div className="Vueloaaa">
                        <div>
                            <h3>Bogotá</h3>
                            <span>hora 8:10</span>
                        </div>
                        <img src="https://logowik.com/content/uploads/images/avianca4784.logowik.com.webp" alt="Logo avianca" />
                        <div>
                            <h3>San José</h3>
                            <span>hora 9:30</span>
                        </div>
                        <span>1.200.000 COP</span>
                    </div>
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
            </div>
            <footer>
                <h1>Ten una experiencia inolvidable</h1>
            </footer>
        </>
    )
}
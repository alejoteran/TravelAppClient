import './stylesNavegacion.css';
import {useNavigate} from "react-router-dom"
export default function Navegacion(){

    const navigate = useNavigate();

    return(
        <>
            <div  className='BarraNavegacion'>
                <div className='DatosNavegacion'>
                    <button className='BotonInicio' onClick={() => {
                        navigate("/")
                    }}>TravelApp</button>
                    <div className='Opciones'>
                        <button onClick={() => {
                        navigate("/")
                        }}>Vuelos</button>
                        <button>Planes</button>
                    </div>
                    <div>
                        <button className='Log' onClick={() => {
                            navigate("/Login")
                        }}>Iniciar sesion</button>
                        <button className='Reg' onClick={() => {
                            navigate("/Register")
                        }}>Registrarse</button>
                    </div>
                </div>
            </div>
        </>
    )
}
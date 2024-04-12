import './styles.css';
import {useNavigate} from "react-router-dom"
export default function Navegacion(){

    const navigate = useNavigate();

    return(
        <>
            <div  className='BarraNavegacion'>
                <nav className='DatosNavegacion'>
                    <button onClick={() => {
                        navigate("/")
                    }}>TravelApp</button>
                    <div>
                        <button onClick={() => {
                            navigate("/Login")
                        }}>Iniciar sesion</button>
                        <button  onClick={() => {
                            navigate("/Register")
                        }}>Registrarse</button>
                    </div>
                </nav>
            </div>
        </>
    )
}
import './styles.css';
import Navegacion from './Navegacion';
export default function Login(){


    return(
        <>
            <Navegacion/>
            <h1 className="Titulo">Iniciar Sesión</h1>
            <form className='DatosLogin'>
                <div>
                    <label>Correo</label>
                    <input type="text" title='Correo'/>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" title='Contraseña'/>
                </div>
            </form>
            <button>Iniciar Sesión</button>
        </>
    )
}
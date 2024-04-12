import './styles.css';
import Navegacion from './Navegacion';
export default function Register(){


    return(
        <>
            <Navegacion/>
            <h1 className="Titulo">Registrate</h1>
            <form className='DatosRegistro'>
                <div>
                    <label>Nombres</label>
                    <input type="text" title='Nombres'/>
                </div>
                <div>
                    <label>Apellidos</label>
                    <input type="text" title='Apellidos'/>
                </div>
                <div>
                    <label>Direccion</label>
                    <input type="text" title='Direccion'/>
                </div>
                <div>
                    <label>Correo</label>
                    <input type="text" title='Correo'/>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" title='Contraseña'/>
                </div>
            </form>
            <button>Registrarse</button>
        </>
    )
}
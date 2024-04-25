import './stylesLogin.css';
import Navegacion from './Navegacion';
export default function Login(){


    return(
        <>
            <Navegacion/>
            <div className='ContainerLogin'>
                <div className='DatosLogin'>
                    <div className='SectionLogin'>
                        <h1 className="Titulo">Iniciar Sesión</h1>
                        <form className='FormLogin'>
                            <div>
                                <div className="Datos">
                                    <div className="col-25">
                                        <label htmlFor="email">Correo</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="email" name="Correo" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Datos">
                                    <div className="col-25">
                                        <label htmlFor="Pword">Contraseña</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="password" id="Pword" name="Password"  />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        </>
    )
}

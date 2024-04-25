import './stylesRegister.css';
import Navegacion from './Navegacion';
export default function Register(){


    return(
        <>
            <Navegacion/>
            <div className='ContainerRegister'>
                <div className='DatosRegister'>
                    <div className='SectionRegister'>
                        <h1 className="Titulo">Registrate</h1>
                        <form className='FormRegister'>
                            <div>
                                <div className="Datos">
                                    <div className="col-25">
                                        <label htmlFor="name">Nombres</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="name" name="Nombre" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Datos">
                                    <div className="col-25">
                                        <label htmlFor="lastName">Apellidos</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="Lastname" name="Apellido" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Datos">
                                    <div className="col-25">
                                        <label htmlFor="address">Dirección</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="address" name="Direccion" />
                                    </div>
                                </div>
                            </div>
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
                        <button>Registrarse</button>
                    </div>
                </div>
            </div>
        </>
    )
}
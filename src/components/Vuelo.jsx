import './stylesVuelo.css';
export default function Vuelo(props){
    
    return(
        <>
            <div className="InfoVuelo">
                <div>
                    <h3>{props.origen}</h3>
                    <span>hora {props.hora}</span>
                </div>
                <img src="https://logowik.com/content/uploads/images/avianca4784.logowik.com.webp" alt="Logo avianca" />
                <div>
                    <h3>{props.destino}</h3>
                    <span>hora</span>
                </div>
                <span>{props.precio} COP</span>
            </div>
        </>
    )
}
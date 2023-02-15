import "./Mensaje.css"

const Mensaje = (props) => {

    return (
        <div>
             
             <p className="names">Hola {props.name}!</p>   
        </div>
       
    );
}

export default Mensaje;
import "./BotonCustom.css";


const BotonCustom = (props) => {
    return (
        <button onClick={props.handleClick} className="btn">
            {props.texto}
        </button>
    );
}

export default BotonCustom
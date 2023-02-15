import './App.css';
import BotonCustom from "./components/BotonCustom/BotonCustom";
import Mensaje from "./components/Mensaje/Mensaje";
import Smartphones from "./components/Smartphones/Smartphones";

const showMessage = () => {
  console.log("Pues ok tio...");
}

const showAlert = () => {
  alert("Le has dado");
}

function App() {
  return (
    <div className="App">
      <h2 className="titlePhone">Teléfonos:</h2>
      <Smartphones></Smartphones>
      <h2 className="title">Mensajes:</h2>
      <Mensaje name="Laura"></Mensaje>
      <Mensaje name="Edu"></Mensaje>
      <h2 className="btnTitle">Botones</h2>
      <BotonCustom handleClick={showAlert} texto="Dale!"></BotonCustom>
      <BotonCustom handleClick={showMessage} texto="Ok"></BotonCustom>     
                 
    </div>
  );
}

export default App;

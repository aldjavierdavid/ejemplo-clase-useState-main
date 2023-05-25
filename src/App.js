import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter titulo="Mi Contador" />
    </div>
  );
}

function Counter(props) {
  // la primera variable, va a ser el valor contínuo de nuestra variable de estado
  // la segunda variable, es una función que nos permite actualizar la variable de estado
  // el argumento del a función useState el valor inicial de la variable estado

  // NORMA DE ORO: NUNCA podemos modificar la variable counter. Siempre hay que usar setCounter
  const [counter, setCounter] = useState(0);

  // Muchas veces usamos una variable auxiliar para acumular todos los estilos en línea de un tag
  const styleCounter = {
    color: counter > 0 ? "rgb(0, 250, 0)" : "#ff0000",
    backgroundColor: "rgb(0,0,0)",
    fontSize: isPar(counter) ? "50px" : "25px",
    display: counter > 10 ? "none" : "block"
  };

  function isPar(counter) {
    if (counter % 2 === 0) return true;
  }

  function handleLower() {
    console.log("Decrementar");
    // inovocamos a la función setCounter y le pasamos el nuevo valor para esta variable
    setCounter(counter - 1);
  }

  function handleAdd() {
    console.log("Incrementar");
    setCounter(counter + 1);
  }

  return (
    <div className="container">
      <div>
        <div>
          <h1>{props.titulo}</h1>
          <h3 style={styleCounter}>{counter}</h3>
          <div>
            <button onClick={handleLower}>lower count</button>
            <button onClick={handleAdd}>add count</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import '../styles/App.scss';
import { useState } from 'react';

function App() {
  // Creamos la constante del número number y la función para modificarla setNumber. El valor inicial va a ser 0
  const [number, setNumber] = useState(0);
  // creamos la función manejarodar que se ejecutará cuando se de al boton
  const handleClick = () => {
    setNumber(number + 1);
  };

  const [color, setColor] = useState('');
  const handleMode = () => {
    if (color === '') {
      setColor('dark');
    } else {
      setColor('');
    }
  };
  return (
    <div>
      <h3>Contador: {number}</h3>
      <button onClick={handleClick}>Pulsar</button>

      <p className={color}>
        lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem lorem Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Mollitia, adipisci, animi
        voluptatum velit maxime aperiam cupiditate ad nemo nulla sint aliquam
        voluptates quaerat. Nesciunt at blanditiis, molestias accusantium
        maiores mollitia!
      </p>
      <button onClick={handleMode}>Des/act dark mode</button>
    </div>
  );
}

export default App;

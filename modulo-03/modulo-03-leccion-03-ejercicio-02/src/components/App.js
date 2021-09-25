import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleText = (ev) => {
    const textValue = ev.target.value;
    const miText = textValue.replace(/[aeou]/gi, 'i');
    setText(miText);
  };
  return (
    <div>
      <h1>Traductor Mimimi</h1>
      <textarea
        name=''
        id='text'
        cols='30'
        rows='5'
        onChange={handleText}
      ></textarea>
      <p className='mimi'>{text}</p>
    </div>
  );
}

export default App;

import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [ingredient, setIngredient] = useState('');
  const handleIngredientSelected = (ev) => {
    const ingredientValue = ev.target.id;
    const ingredientChecked = ev.currentTarget.checked;
    //  cuando tienes todos marcados y se desmarca otro, no "recuerda" que tiene marcados los ingredientes correctos

    if (
      ingredientChecked === true &&
      ingredientValue === ('patatas' && 'huevos' && 'cebolla')
    ) {
      //añadimos el elemnto al array (linea 17 de clase de dudas)
      const foodListClone = [...ingredient, ev.currentTarget.value];
      setIngredient(foodListClone); // incluye nuevo elemento en el array
    } else {
      const foodListClone = ingredient.filter(
        (food) => food !== ev.currentTarget.value
      );
      setIngredient(foodListClone);
    }
  };
  return (
    <div>
      <h2>Selecciona los ingredientes de la tortilla de patatas</h2>
      <form action=''>
        <label htmlFor='macarrones'>
          <input
            type='checkbox'
            name='ingredientes'
            id='macarrones'
            onChange={handleIngredientSelected}
          />
          Macarrones
        </label>
        <label htmlFor='patatas'>
          <input
            type='checkbox'
            name='ingredientes'
            id='patatas'
            onChange={handleIngredientSelected}
          />
          Patatas
        </label>
        <label htmlFor='nueces'>
          <input
            type='checkbox'
            name='ingredientes'
            id='nueces'
            onChange={handleIngredientSelected}
          />
          Nueces
        </label>
        <label htmlFor='huevos'>
          <input
            type='checkbox'
            name='ingredientes'
            id='huevos'
            onChange={handleIngredientSelected}
          />
          Huevos
        </label>
        <label htmlFor='cebolla'>
          <input
            type='checkbox'
            name='ingredientes'
            id='cebolla'
            onChange={handleIngredientSelected}
          />
          Cebolla
        </label>
        <label htmlFor='cerveza'>
          <input
            type='checkbox'
            name='ingredientes'
            id='cerveza'
            onChange={handleIngredientSelected}
          />
          Cerveza
        </label>
        <p>{ingredient}</p>
      </form>
    </div>
  );
}

export default App;

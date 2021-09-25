import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';
import ls from '../services/localStorage';

const App = () => {
  //Para guardar las series respondidos por la api (como va a ser un listado, va a ser un array) y cambiará cada vez que se realice una petición a la api
  const [series, setSeries] = useState([]);
  //para guardar el input de busqueda, ya que quiero que se seleccione cuando se cambie el valor del imput
  const [searchSerieName, setSearchSerieName] = useState(ls.get('search', ''));
  useEffect(() => {
    if (ls.get(searchSerieName, '') === '') {
      callToApi(searchSerieName).then((dataPepino) => {
        setSeries(dataPepino);
        ls.set(
          searchSerieName /*queremos que de nombre sea la variable que guarda el string que usuaria busca */,
          dataPepino
        );
      });
    } else {
      setSeries(ls.get(searchSerieName, []));
    }
  }, [searchSerieName]);
  // para meter en ls la busqueda y la cargue al recargar la pag:
  useEffect(() => {
    ls.set('search', searchSerieName);
  }, [searchSerieName]);

  const handleInput = (ev) => {
    setSearchSerieName(ev.target.value); // cada vez que se cambie el input, cambia la seriebuscada, lo que controlara cuando se ejecutará el useEffect
  };
  const renderSeries = () => {
    return series.map((eachserie, i) => {
      return (
        <li key={i} id={eachserie.id}>
          {eachserie.name}
        </li>
      );
    });
  };
  return (
    <div>
      <h2>Buscador de series</h2>
      <label htmlFor=''>
        Busca una serie:
        <input type='text' onChange={handleInput} value={searchSerieName} />
      </label>
      <h3>Lista de series:</h3>
      <ul>{renderSeries()}</ul>
    </div>
  );
};

export default App;

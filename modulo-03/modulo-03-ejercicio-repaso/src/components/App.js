import '../styles/App.scss';
import initialData from '../data/contacts.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState('');
  const [newContact, setNewContact] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
  });
  // const [newName, setNewName] = useState('');
  // const [newLastName, setNewLastName] = useState('');
  // const [newPhone, setNewPhone] = useState('');
  // const [newEmail, setNewEmail] = useState('');
  const handleSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };
  const handleChangeNewContact = (ev) => {
    // if(ev.currentTarget.id==='name'){
    // setNewName(ev.currentTarget.value)
    // }
    setNewContact({
      ...newContact,
      [ev.currentTarget.id]: ev.currentTarget.value,
    });
  };

  const handleClickAdd = (ev) => {
    ev.preventDefault();

    // const newContact = {
    //   name: newName,
    //   lastname: newLastName,
    //   phone: newPhone,
    //   email: newEmail,
    // };
    setData([...data, newContact]);
    //para que una vez añadido se quede vacío:
    setNewContact({ name: '', lastname: '', phone: '', email: '' });
  };
  //no es una función, es una constante y luego en el html llamo a la constante
  const printHTML = data
    .filter(
      (eachDataP) =>
        eachDataP.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        eachDataP.lastname
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
    )
    .map((eachData, index) => (
      <li className='contact__item' key={index}>
        <p className='contact__name'>
          <label className='contact__label'>Nombre:</label>
          {eachData.name} {eachData.lastname}
        </p>
        <p className='contact__phone'>
          <label className='contact__label'>Teléfono:</label>
          <a
            href={'tel:' + eachData.phone}
            title='Pulsa aquí para llamar a Lola'
          >
            {eachData.phone}
          </a>
        </p>
        <p className='contact__mail'>
          <label className='contact__label'>Email:</label>
          <a
            href={`mailto:${eachData.emai}`}
            title='Pulsa aquí para escribir a Lola'
          >
            {eachData.email}
          </a>
        </p>
      </li>
    ));

  return (
    <div className='page'>
      {/* header */}
      <header className='header'>
        <h1 className='header__title'>Mi agenda de contactos</h1>
        <form>
          <input
            className='header__search'
            autoComplete='off'
            type='search'
            name='search'
            valule={search}
            placeholder='Filtrar contactos por nombre'
            onChange={handleSearch}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className='contact__list'>{printHTML}</ul>

        {/* new contact */}
        <form className='new-contact__form'>
          <h2 className='new-contact__title'>Añade un nuevo contacto</h2>
          <input
            className='new-contact__input'
            type='text'
            name='name'
            id='name'
            placeholder='Nombre'
            onChange={handleChangeNewContact}
            value={newContact.name}
          />
          <input
            className='new-contact__input'
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Apellidos'
            onChange={handleChangeNewContact}
            value={newContact.lastname}
          />
          <input
            className='new-contact__input'
            type='phone'
            name='phone'
            id='phone'
            placeholder='Teléfono'
            onChange={handleChangeNewContact}
            value={newContact.phone}
          />
          <input
            className='new-contact__input'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            onChange={handleChangeNewContact}
            value={newContact.email}
          />
        </form>
        <input
          className='new-contact__btn'
          type='submit'
          value='Añadir'
          onClick={handleClickAdd}
        />
      </main>
    </div>
  );
}

export default App;

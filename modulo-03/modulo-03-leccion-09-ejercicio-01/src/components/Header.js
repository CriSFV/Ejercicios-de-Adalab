import '../styles/Header.scss';
import logo from '../images/logo-adalab.jpg';
import Li from './Link';
const Header = () => {
  return (
    <div>
      <header className='header'>
        <a href='https://adalab.es/' rel='noreferrer' target='_BLANK'>
          <img className='logo' src={logo} alt='logo adalab' title='Adalab' />
        </a>
        <nav>
          <ul className='menu'>
            <Li className='menu__line' openInNewtab={true} />
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;

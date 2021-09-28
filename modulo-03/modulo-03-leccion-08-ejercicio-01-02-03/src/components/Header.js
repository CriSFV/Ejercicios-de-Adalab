import '../styles/components/Title.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Overview from './Overwiew';
import Repositories from './Repositories';
import NotFoundPage from './NotFoundPage';

const Header = () => {
  return (
    <>
      <h1 className='title'>
        <a className='title__link' href='/'>
          Adalab
        </a>
      </h1>
      <Route path='/settings'>
        <div className='manzanas'>No apto para manzanas</div>
      </Route>

      <nav>
        <ul className='menu'>
          <li>
            <Link to='/overview' className='menu__link'>
              Overview
            </Link>
          </li>
          <li>
            <Link to='/repositories' className='menu__link'>
              Repositories
            </Link>
          </li>
          <li>
            <Link to='/packages' className='menu__link'>
              Packages
            </Link>
          </li>
          <li>
            <Link to='/people' className='menu__link'>
              People
            </Link>
          </li>
          <li>
            <Link to='/teams' className='menu__link'>
              Teams
            </Link>
          </li>
          <li>
            <Link to='/projects' className='menu__link'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/settings' className='menu__link'>
              Settings
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'></Route>
          <Route exact path='/overview'>
            <Overview />
          </Route>
          <Route exact path='/repositories'>
            <Repositories />
          </Route>
          <Route exact path='/packages'>
            <p>
              Packages: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quidem odit, quam aliquid eligendi rem esse reiciendis dolores
              fuga, harum nulla voluptatum mollitia autem quaerat nam
              voluptates. Nam dolor repellendus impedit.
            </p>
          </Route>
          <Route exact path='/people'>
            <p>
              People: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quidem odit, quam aliquid eligendi rem esse reiciendis dolores
              fuga, harum nulla voluptatum mollitia autem quaerat nam
              voluptates. Nam dolor repellendus impedit.
            </p>
          </Route>
          <Route exact path='/teams'>
            <p>
              Teams: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quidem odit, quam aliquid eligendi rem esse reiciendis dolores
              fuga, harum nulla voluptatum mollitia autem quaerat nam
              voluptates. Nam dolor repellendus impedit.
            </p>
          </Route>
          <Route exact path='/projects'>
            <p>
              Projects: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quidem odit, quam aliquid eligendi rem esse reiciendis dolores
              fuga, harum nulla voluptatum mollitia autem quaerat nam
              voluptates. Nam dolor repellendus impedit.
            </p>
          </Route>
          <Route exact path='/settings'>
            <p>
              Settings: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quidem odit, quam aliquid eligendi rem esse reiciendis dolores
              fuga, harum nulla voluptatum mollitia autem quaerat nam
              voluptates. Nam dolor repellendus impedit.
            </p>
          </Route>
          <Route exact path='/notFoundPage'>
            <NotFoundPage />
          </Route>
        </Switch>
      </nav>
    </>
  );
};
export default Header;

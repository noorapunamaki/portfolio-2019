import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Illustration from './Illustration';
import Logo from './Logo';

const App: React.FC = () =>
  <Router>
    <header className='header-container'>
      <h1><Logo /></h1>
      <nav className='nav'>
        <li>
          <NavLink to="/" exact>Design</NavLink>
        </li>
        <li>
          <NavLink to='/thesis'>Tutkielma</NavLink>
        </li>
      </nav>
    </header>
    <main className='main-container'>
      <Switch>
        <Route path='/thesis'>tutkielma</Route>
        <Route path='/'>
          <Illustration name='Research' />
          <Illustration name='Interface' />
          <Illustration name='Code' />
        </Route>
      </Switch>
    </main>
    <footer className='footer-container'>
      <ul className='links'>
        <li><a href='mailto:noora@pirttilahti.net'>noora@pirttilahti.net</a></li>
        <li><a href='tel:+358415486193'>041 548 6193</a></li>
      </ul>
    </footer>
  </Router>;

export default App;

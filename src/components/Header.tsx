import React from 'react';

import Logo from './Logo';

const Header: React.FC = () =>
  <header className='header-container'>
    <h1><Logo /></h1>
    <ul className='links'>
      <li>
        <a href='mailto:noora@pirttilahti.net'>noora@pirttilahti.net</a>
      </li>
      <li>
        <a href='tel:+358415486193'>041 548 6193</a>
      </li>
    </ul>
  </header>;

export default Header;

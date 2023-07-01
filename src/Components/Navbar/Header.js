import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <Button text="Givefeedback"/>
    </nav>
  );
}

export default Header;

import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img className='header__img' 
        src="./assets/zeonAI-logo-black.png" 
        alt='logo' 
        />
      </div>
      <div className='header__right'>
        <ul>
          <li>Software & Service</li>
          <li>Why ZeonAI</li>
          <li>About us</li>
          <li>Client & Partner</li>
          <li>Blogs</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
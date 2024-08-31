import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-logo'>
        <img src={images.gericht} alt='nav logo' />
      </div>

      <ul className='navbar-links'>
        <li className='li-1 p__opensans'><a href="#home">Home</a></li>
        <li className='li-2 p__opensans'><a href="#about">About</a></li>
        <li className='li-3 p__opensans'><a href="#menu">Menu</a></li>
        <li className='li-4 p__opensans'><a href="#awards">Awards</a></li>
        <li className='li-5 p__opensans'><a href="#contact">Contact</a></li>
      </ul>

      <div className='navbar-login'>
        <a href="#login" className='li-6 p__opensans' >Log In / Register</a>
        <div />
        <a href="/" className='li-7 p__opensans'>Book Table</a>
      </div>

      <div className='navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true) }/>
        
        {toggleMenu && ( 
          <div className='navbar-smallscreen-overlay'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay-close' onClick={() => setToggleMenu(false)}/>
            <ul className='navbar-smallscreen-links'>
              <li className='li-1 p__opensans'><a href="#home">Home</a></li>
              <li className='li-2 p__opensans'><a href="#about">About</a></li>
              <li className='li-3 p__opensans'><a href="#menu">Menu</a></li>
              <li className='li-4 p__opensans'><a href="#awards">Awards</a></li>
              <li className='li-5 p__opensans'><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

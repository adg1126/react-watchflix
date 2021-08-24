import React, { useEffect, useState } from 'react';
import './Nav.css';
import history from '../../history';
import watchFlixLogo from '../../assets/images/watchflix-logo.png';

export default function Nav() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setShowBackground(true) : setShowBackground(false);
    });

    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <div className={`nav ${showBackground && 'nav_black'}`}>
      <img
        className='nav_logo'
        src={watchFlixLogo}
        alt='Netflix Logo'
        onClick={() => history.push('/')}
      />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import './Nav.css';
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

  const handleClickScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className={`nav ${showBackground && 'nav_black'}`}>
      <img
        className='nav_logo'
        src={watchFlixLogo}
        alt='Netflix Logo'
        onClick={handleClickScroll}
      />
    </div>
  );
}

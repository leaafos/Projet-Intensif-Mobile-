import React, { useState } from 'react';
import '../styles/swipe.css';
import Card1 from '../assets/cardVoidHope.png';
import Logo from '../assets/LOGO.svg';

const Swipe = ({ card, onSwipeLeft, onSwipeRight }) => {
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX === null) return;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    // Determine swipe direction
    if (deltaX > 50) {
      // Swipe right
      onSwipeRight();
    } else if (deltaX < -50) {
      // Swipe left
      onSwipeLeft();
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  return (
    <div className='page'>
        <div className='header-card'>
            <img src={Logo}></img>
        </div>
        <div
        className="card"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        >
            <img src={Card1}></img>
        </div>
    </div>
    
  );
};

export default Swipe;

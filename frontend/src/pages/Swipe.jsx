import React from 'react';
import '../styles/swipe.css';
import Card1 from '../assets/cardVoidHope.png';
import Logo from '../assets/LOGO.svg';
import BurgerMenu from '../components/BurgerMenu';
import CroixRouge from '../assets/croixRouge.svg';
import Refresh from '../assets/refresh.svg';
import Enregistrer from '../assets/enregistrer.svg';


const Swipe= () => {
  
  return (
    <div className='page'>

        <div className='header-card'>
            <img src={Logo}></img>
            {/*<BurgerMenu />*/}

        </div>
        <div
        className="card">
        {/*onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
         */}
            <img src={Card1}></img>
        </div>
        <div className='boutons'>
            <button className='croix-rouge'>
                <img src={CroixRouge}></img>
            </button>
            <button className='refresh'>
                <img src={Refresh}></img>
            </button>
            <button className='enregistrer'>
                <img src={Enregistrer}></img>
            </button>

        </div>
    </div>
    
  );
};

export default Swipe;

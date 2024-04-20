import React, {useState} from 'react';
import '../styles/swipe.css';
import Card1 from '../assets/cardVoidHope.png';
import Logo from '../assets/LOGO.svg';
import BurgerMenu from '../components/BurgerMenu';
import CroixRouge from '../assets/croixRouge.svg';
import Refresh from '../assets/refresh.svg';
import Enregistrer from '../assets/enregistrer.svg';
import Card1Back from '../assets/card1back.png';
import Card2 from '../assets/card2-front.png';
import Card2Back from '../assets/card2-back.png';
import Card3 from '../assets/card3.png';
import Card3Back from '../assets/card3-back.png'


const Swipe= () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [showNewCard, setShowNewCard] = useState(false);
    const [showLastCard, setShowLastCard] = useState(false);
    const [exitSecondCard, setExitSecondCard] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    const handlePoubelleClick = () => {
        console.log('Bouton "Poubelle" cliqué');
        setIsExiting(true);
        setShowNewCard(true);
    };

    const handleEnregistrerClick = () => {
        console.log('Bouton "Enregistrer" cliqué');
        setExitSecondCard(true);
        setShowLastCard(true);
    };
    
  
  return (
    <div className='page'>

        <div className='header-card'>
            <img src={Logo}></img>  
            {/*<BurgerMenu />*/}    


        </div>
            <div className={`card ${isFlipped ? 'flipped' : ''} ${isExiting ? 'exit' : ''}`} >
                <div className='card-content-front'onClick={handleClick}>
                    <img src={Card1}></img>
                </div>
                <div className='card-content-back' onClick={handleClick}>
                    <img src={Card1Back}></img>
                </div>
            </div>

        {showNewCard && (
            <div className={`new-card ${showNewCard ? 'enter-from-right' : ''} ${isFlipped ? 'flipped' : ''} ${exitSecondCard ? 'exit' : ''}`}>
                <div className='card2-content-front'onClick={handleClick}>
                    <img src={Card2}></img>
                </div>
                <div className='card2-content-back' onClick={handleClick}>
                    <img src={Card2Back}></img>
                </div>
            </div>
        )}

        {showLastCard && (
            <div className={`last-card ${showLastCard ? 'enter-from-right' : ''} ${isFlipped ? 'flipped' : ''}`}>
                <div className='card3-content-front'onClick={handleClick}>
                    <img src={Card3}></img>
                </div>
                <div className='card3-content-back' onClick={handleClick}>
                    <img src={Card3Back}></img>
                </div>
            </div>
        )}

        <div className='boutons'>
            <button className='croix-rouge'onClick={handlePoubelleClick}>
                <img src={CroixRouge}></img>
            </button>
            <button className='refresh'>
                <img src={Refresh}></img>
            </button>
            <button className='enregistrer' onClick={handleEnregistrerClick}>
                <img src={Enregistrer}></img>
            </button>

        </div>
    </div>
    
  );
};

export default Swipe;

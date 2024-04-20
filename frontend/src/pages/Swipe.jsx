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
import Card3Back from '../assets/card3-back.png';
import Card4 from '../assets/Card4.png';


const Swipe= () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [showSecond, setShowSecondCard] = useState(false);
    const [ShowThirdCard, setShowThirdCard] = useState(false);
    const [exitSecondCard, setExitSecondCard] = useState(false);
    const [ShowFourthCard, setShowFourthCard] = useState(false);
    const [exitThirdCard, setExitThirdCard] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    const handlePoubelleClick = () => {
        console.log('Bouton "Poubelle" cliqué');
        setIsExiting(true);
        setShowSecondCard(true);
    };

    const handleEnregistrerClick = () => {
        setClickCount(prevCount => prevCount + 1);
        console.log('Bouton "Enregistrer" cliqué');
        setExitSecondCard(true);
        setShowThirdCard(true);
        if (clickCount == 1) {
            setShowFourthCard(true);
            setExitThirdCard(true);
        };
    };
    
  return (
    <div className='page'>

        <div className='header-card'>
            <img src={Logo}></img>  
            <BurgerMenu></BurgerMenu>


        </div>
            <div className={`card ${isFlipped ? 'flipped' : ''} ${isExiting ? 'exitLeft' : ''}`} >
                <div className='card-content-front'onClick={handleClick}>
                    <img src={Card1}></img>
                </div>
                <div className='card-content-back' onClick={handleClick}>
                    <img src={Card1Back}></img>
                </div>
            </div>

        {showSecond && (
            <div className={`new-card ${showSecond ? 'enterRight' : ''} ${isFlipped ? 'flipped' : ''} ${exitSecondCard ? 'exitRight' : ''}`}>
                <div className='card2-content-front'onClick={handleClick}>
                    <img src={Card2}></img>
                </div>
                <div className='card2-content-back' onClick={handleClick}>
                    <img src={Card2Back}></img>
                </div>
            </div>
        )}

        {ShowThirdCard && (
            <div className={`last-card ${ShowThirdCard ? 'enterLeft' : ''} ${isFlipped ? 'flipped' : ''} ${exitThirdCard ? 'exitRight' : ''}`}>
                <div className='card3-content-front'onClick={handleClick}>
                    <img src={Card3}></img>
                </div>
                <div className='card3-content-back' onClick={handleClick}>
                    <img src={Card3Back}></img>
                </div>
            </div>
        )}
        {ShowFourthCard && (
                <div className={`fourth-card ${ShowFourthCard ? 'enterLeft' : ''}`}>
                    <img src={Card4}></img>
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

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/collections.css';
import profil1 from '../assets/profil1.png';
import profil5 from '../assets/profil5.png';
import profil8 from '../assets/profil8.png';
import profil9 from '../assets/profil9.png';
import profil10 from '../assets/profil10.png';
import ajouter from '../assets/ajouter.png';
import jeux1 from '../assets/jeux1.png';
import jeux2 from '../assets/jeux2.png';
import jeux3 from '../assets/jeux3.png';
import jeux4 from '../assets/jeux4.png';
import jeux5 from '../assets/jeux5.png';
import carton from '../assets/carton.png';
import background3 from '../assets/background3.png'

export default function Collections() {
    return (
         <div className="collections-container" >
            <div class="background3">
                    <img src={background3}/>
                </div>
            <img className="carton"src={carton} alt="Carton" />
            <div className="titre3">
            <h1>Loot Box</h1>
            <div className="new-photos">
                <img src={profil9} alt="Profil9"/>
                <img src={ajouter} alt="Ajouter" />
            </div>
        </div>
        <div class="page2">
        <div className="titre4">
        <h2> 5 Pins</h2>
        </div>
        <div className="photos-container">
         <div className="image-pair">
            <div className="jeux">
             <img  src={jeux1} alt="jeux1" className="image-1"/>
             <div className="profil-container"> 
             <img src={profil8} alt="Profil8"/><span>Plug In Digital</span></div>
             </div>
             <div className="jeux">
            <img  src={jeux2} alt="jeux2" className="image-2"/>
            <div className="profil-container"> 
            <img src={profil9} alt="Profil9"/> <span>HeadUpGames</span></div>
            </div>
            </div>
       <div className="image-pair">
            <div className="jeux">
            <img src={jeux3} alt="jeux3" className="image-3"/>
            <div className="profil-container"> 
            <img src={profil1} alt="Profil1"/> <span>Plug In Digital</span></div>
            </div>
            <div className="jeux">
            <img src={jeux4} alt="jeux4" className="image-4"/>
            <div className="profil-container"> 
            <img src={profil5} alt="Profil5"/> <span>ArmorGames</span></div>
            </div>
            </div>
            </div>
       <div className="image-pair">
            <div className="jeux">
         <img src={jeux5} alt="jeux5" className="image-5"/>
         <div className="profil-container"> 
         <img src={profil10} alt="Profil10"/> <span>Kongregate</span></div>
         </div>
        </div>
        </div>
        </div>
    )
}
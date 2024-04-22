import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nintendo.css';
import carton from '../assets/carton.png';
import youtube from '../assets/youtube.png';
import twitch from '../assets/twitch.png';
import steam1 from '../assets/steam1.png';
import amour from '../assets/amour.png';
import ecole from '../assets/ecole.png';
import puzzle from '../assets/puzzle.png'
import profil9 from '../assets/profil9.png'
import modifier from '../assets/modifier.png'
import ludique from '../assets/ludique.png'
import guerre from '../assets/guerre.png'
import city from '../assets/city.png';
import killer from '../assets/killer.png';
import river from '../assets/river.png';
import golf from '../assets/golf.png';
import chants from '../assets/chants.png';
import neuronet from '../assets/neuronet.png';
import enregistrement1 from '../assets/enregistrement.png';
import Background2 from '../assets/background2.png'

export default function Nintedo() {
    return (
        <div>
            <div class="background-profil">
                <img className="profil99"src={profil9} alt="Profil9"/>
        <img className="modifier"src={modifier} alt="Modifier"/>
        <h6 class="small-h1">Amelya Dos Santos</h6>
        <div class="mails">
        <span>@2santos.amelya</span>
                </div>
        
        </div>
        <div className="icone99">
        <img className="twitch"src={twitch} alt="Twitch"/>
        <img className="youtube"src={youtube} alt="Youtube"/>
        <img className="steam1"src={steam1} alt="Steam1"/>
        </div>

        <div class="page3">
        <div className="emojis">
        <img className="Puzzle"src={puzzle} alt="Puzzle"/> 
        <img className="Amour"src={amour} alt="Amours"/> 
        <img className="Ecole"src={ecole} alt="Ecole"/>
        </div>
        <div className="Home3">
        <img className="Carton1" src={carton} alt="Carton1"/>
            <div className="Box">
                <span>Loot Box</span>
            </div>
        </div>
        </div>
        <div className="image-pair2">
        <div className="jeux2">
         <img  src={ludique} alt="Ludique" className="image-5"/>
         </div>
         <div className="jeux2">
        <img  src={guerre} alt="guerre" className="image-6"/>
        </div>
         </div >
         
         <div className="image-pair3">
        <img  src={city} alt="City" className="image-12"/>     
        <img src={killer} alt="Killer" className="image-7"/>
        <img  src={river} alt="River" className="image-8"/>
        <img src={golf} alt="Golf" className="image-9"/>   
        <img src={chants} alt="Chants" className="image-10"/>
        <Link to="/produit2">
            <img src={neuronet} alt="Neuronet" className="image-11"/> 
        </Link>
    
        </div>
       
        <div className='Enregistrement1'>
        
         </div>
         <div className="Gears"> 
         <span>Mes gears</span>
         </div>
        </div>
    )
}
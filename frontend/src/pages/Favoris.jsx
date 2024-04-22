import { Link } from 'react-router-dom';
import enregistrement from '../assets/enregistrement.png';
import '../styles/favoris.css';
import unleaving from '../assets/unleaving.png';
import city from '../assets/city.png';
import chants from '../assets/chants.png';
import golf from '../assets/golf.png';
import killer from '../assets/killer.png';
import neuronet from '../assets/neuronet.png';
import orrstead from '../assets/orrstead.png';
import hope from '../assets/hope.png';
import profil1 from '../assets/profil1.png';
import profil2 from '../assets/profil2.png';
import profil3 from '../assets/profil3.png';
import profil4 from '../assets/profil4.png';
import profil5 from '../assets/profil5.png';
import profil6 from '../assets/profil6.png';
import profil7 from '../assets/profil7.png';
import background3 from '../assets/background3.png'


export default function Favoris() {
      
    return (
        <div className="favoris-container" >
            <div className="background3">
                    <img src={background3}/>
            </div>

            <img className="enregistrement"src={enregistrement} alt="Enregistrement" />
            
            <div className="Home1">
                <h1>Gears</h1>
            </div>
            <div class="page2">
                <div className="Home2">
                <h2> 2 Pins</h2>
                </div>
            </div>

            <div className="photos-container1">
                 <div className="image-pair1">
                    <div className="jeux">
                         <img  src={unleaving} alt="Unleaving" className="image-1"/>
                             <div className="profil-container"> 
                                <img src={profil1} alt="Profil1"/><span>Plug In Digital</span></div>
                             </div>
                             <div className="jeux">
                                 <img  src={neuronet} alt="Neuronet" className="image-2"/>
                            <div className="profil-container"> 
                                <img src={profil2} alt="Profil2"/> <span>Devolver Digital</span></div>
                            </div>
                        </div>
        </div>
    </div>
            
)}
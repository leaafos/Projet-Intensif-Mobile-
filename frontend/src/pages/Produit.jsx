import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/produit.css'
import Logo from '../assets/LOGO.svg';
import narratif from '../assets/narratif.svg';
import aventure from '../assets/aventure.svg';
import BurgerMenu from '../components/BurgerMenu';
import unleaving from '../assets/unleaving-produit.png';
import cloche from '../assets/cloche.svg';
import favoris from '../assets/favoris.svg';
import developpeur from '../assets/developpeur.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import plus from '../assets/plus.png';
import jeu1 from '../assets/jeu1.png';
import jeu2 from '../assets/jeu2.png';
import jeu3 from '../assets/jeu3.png';



export default function Produit() {
    return (
        <div className="produit">
            <div className="header">
                <img src={Logo} alt="Logo"></img>
            </div>
            <div>
                <h4 className="titreJeu">UNLEAVING</h4>
                <img src={cloche} className="cloche"></img>
                <img src={favoris} className="favoris"></img>
            </div>
            <div>
                <div className='categorie1'>
                    <img src={narratif}></img>
                    <span className='titreCategorie1'>Narratif</span>
                </div>
                <div className='categorie2'>
                    <img src={aventure}></img>
                    <span className='titreCategorie2'>Aventure</span>
                </div>
                <div>
                    <span className='texte1'>Développeur :</span>
                    <span className='texte2'>Dream Harvest</span>
                    <img src={developpeur} className="icondev"></img>
                </div>
                <div>
                    <span className='texte3'>Date de sortie :</span>
                    <span className='texte4'>04/05/23</span>
                </div>
                <div>
                    <span className='texte5'>Espace disque :</span>
                    <span className='texte6'>12,4 GB</span>
                </div>
                <div className="separation"></div>
                <div>
                    <span className="texte7">Prix <b>Dream Harvest</b></span>
                    <span className="prix">16,78€</span>
                </div>
                <div>
                    <span className='texte8'>autres offres</span>
                    <img src={icon1} className="icon1"></img>
                    <img src={icon2} className="icon2"></img>
                    <img src={icon3} className="icon3"></img>
                    <img src={icon4} className="icon4"></img>
                    <img src={icon5} className="icon5"></img>
                    <img src={plus} className="plus"></img>
                </div>
                <div className="separation1"></div>
                <div>
                    <span className="texte9"><b>Description</b></span>
                    <span className="texte10">Galerie</span>
                    <span className="texte11">Prix</span>
                    <span className="texte12">Développeur</span>
                </div>
                <div className="ligne"></div>
                <div>
                    <span className="texte13"><b>ILS PARLENT DE NOUS</b></span>
                </div>
                <div>
                    <img src={jeu1} className="jeu1"></img>
                    <img src={jeu2} className="jeu2"></img>                
                </div>
                <div>
                    <span className="texte14">@2santos.amelya</span>
                    <span className="texte15">“Une exploration des recoins obscurs de l'esprit humain à travers des énigmes stimulantes.”</span>
                    <span className="texte16">@talmo.primesupreme</span>
                    <span className="texte17">“Un monde surréaliste rendu vivant par des œuvres d'art peintes à la main.”</span>
                </div>
                <div>
                    <span className="texte18">
                    UNLEAVING est un jeu de plateforme et de réflexion captivant, doté d'un monde surréaliste rendu vivant par des œuvres d'art peintes à la main et des animations de peinture uniques. 
                    
                    Les énigmes du jeu et les défis basés sur les compétences sont étroitement intégrés dans la trame de l'histoire, permettant une expérience immersive.

                    Qui es-tu ? 
                    Que fais-tu ici ? 
                    Tu es perdu. 
                    Pourtant, tu es chez toi. 
                    Ne vacille pas.
                    Car tu es revenu.

                    Quand tout semble désespéré, un enfant est réveillé par les chuchotements de la dernière feuille, attiré dans un monde imaginaire. Unleaving invite le joueur dans un jeu de plateforme et de réflexion axé sur la narration, où chaque défi se déroule dans un paysage peint à la main, explorant les métaphores et les frontières insaisissables de la perception et du sens.
                    </span>
                </div>
            </div>
        </div>
    )
}
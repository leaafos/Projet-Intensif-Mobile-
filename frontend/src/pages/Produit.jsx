import React from 'react';
import '../styles/produit.css';
import Logo from '../assets/LOGO.svg';
import narratif from '../assets/narratif.svg';
import aventure from '../assets/aventure.svg';
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
        <div className="produit-container">
            <div className="produit-header">
                <img src={Logo} alt="Logo" className="produit-logo" />
            </div>
            <div className="produit-content">
                <div className="produit-title-section">
                    <h4 className="produit-titreJeu">UNLEAVING</h4>
                    <div className="produit-actions">
                        <img src={cloche} className="produit-cloche" alt="Cloche" />
                        <img src={favoris} className="produit-favoris" alt="Favoris" />
                    </div>
                </div>

                <div className="produit-categories">
                    <div className="produit-categorie1">
                        <img src={narratif} alt="Narratif" />
                        <span className="produit-titreCategorie1">Narratif</span>
                    </div>
                    <div className="produit-categorie2">
                        <img src={aventure} alt="Aventure" />
                        <span className="produit-titreCategorie2">Aventure</span>
                    </div>
                </div>

                <div className="produit-info">
                    <span className="produit-texte1"><b>Développeur :</b> Dream Harvest</span>
                    <img src={developpeur} alt="Développeur" className="produit-icondev" />
                </div>

                <div className="produit-info">
                    <span className="produit-texte2"><b>Date de sortie :</b> 04/05/23</span>
                </div>
                <div className="produit-info">
                    <span className="produit-texte3"><b>Espace disque :</b> 12,4 GB</span>
                </div>
                <div className="produit-separation"></div>

                <div className="produit-prix-section">
                    <span className="produit-texte4">Prix <b>Dream Harvest</b></span>
                    <span className="prix">16,78€</span>
                </div>
                <div className="ligne1">
                    <span className='produit-texte5'>autres offres</span>
                    <div className="produit-offres">
                        <img src={icon1} alt="Icon 1" />
                        <img src={icon2} alt="Icon 2" />
                        <img src={icon3} alt="Icon 3" />
                        <img src={icon4} alt="Icon 4" />
                        <img src={icon5} alt="Icon 5" />
                        <img src={plus}  alt="Plus"/>
                    </div>
                </div>
                <div className="produit-separation"></div>
                <div>
                    <span className="produit-texte6"><b>Description</b></span>
                    <span className="produit-texte7">Galerie</span>
                    <span className="produit-texte8">Prix</span>
                    <span className="produit-texte9">Développeur</span>
                </div>
                <div className="ligne"></div>
                <span className="produit-texte10">ILS PARLENT DE NOUS</span>
                <div className="produit-review">
                    <img src={jeu1} alt="Jeu 1" className="produit-jeu" />
                    <img src={jeu2} alt="Jeu 2" className="produit-jeu" />
                </div>

                <div className="produit-temoignages">
                    <span className="produit-texte">@2santos.amelya</span>
                    <span className="produit-texte">“Une exploration des recoins obscurs de l'esprit humain à travers des énigmes stimulantes.”</span>
                    <span className="produit-texte">@talmo.primesupreme</span>
                    <span className="produit-texte">“Un monde surréaliste rendu vivant par des œuvres d'art peintes à la main.”</span>
                </div>

                <div className="produit-description">
                    <span className="produit-texte">
                        UNLEAVING est un jeu de plateforme captivant. Les énigmes et les défis basés sur les compétences sont étroitement intégrés dans la trame de l'histoire, permettant une expérience immersive. UNLEAVING est un jeu de plateforme captivant. Les énigmes et les défis basés sur les compétences sont étroitement intégrés dans la trame de l'histoire, permettant une expérience immersive.
                    </span>
                </div>
            </div>
        </div>
    );
}
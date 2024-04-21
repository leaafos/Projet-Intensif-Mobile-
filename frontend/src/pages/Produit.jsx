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
import unleaving from '../assets/unleaving-produit.png';

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
                <div className="produit-separation1"></div>
                <div className="sous-separation">
                    <span className="produit-texte6"><b>Description</b></span>
                    <span className="produit-texte7">Galerie</span>
                    <span className="produit-texte8">Prix</span>
                    <span className="produit-texte9">Développeur</span>
                </div>
                <div className="ligne"></div>
                <div className="sous-separation1">
                    <span className="produit-texte10">ILS PARLENT DE NOUS</span>
                </div>
                <div className="produit-review">
                    <img src={jeu1} alt="Jeu 1" className="produit-jeu1" />
                    <img src={jeu2} alt="Jeu 2" className="produit-jeu2" />
                </div>

                <div className="video">
                    <span className="produit-texte11">@2santos.amelya</span>
                    <span className="produit-texte13">@talmo.primesupreme</span>
                </div>
                <div className="video">
                    <span className="produit-texte12">“Une exploration des recoins obscurs de l'esprit humain à travers des énigmes stimulantes.”</span>
                    <span className="produit-texte14">“Un monde surréaliste rendu vivant par des œuvres d'art peintes à la main.”</span>

                </div>
                <div className="produit-description">
                    <span className="produit-texte15">
                        UNLEAVING est un jeu de plateforme et de réflexion captivant, doté d'un monde surréaliste rendu vivant par des œuvres d'art peintes à la main et des animations de peinture uniques. 
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                         Les énigmes du jeu et les défis basés sur les compétences sont étroitement intégrés dans la trame de l'histoire, permettant une expérience immersive.
                    </span>
                </div>
                <div className="produit-description1">
                    <span className="produit-texte16">
                        Qui es-tu ? 
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                        Que fais-tu ici ? 
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                        Tu es perdu.  
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                        Pourtant, tu es chez toi.   
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                        Ne vacille pas.   
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                        Car tu es revenu.   
                    </span>
                </div>
                <div className="produit-description1">
                    <span className="produit-texte16">
                        Quand tout semble désespéré, un enfant est réveillé par les chuchotements de la dernière feuille, attiré dans un monde imaginaire. Unleaving invite le joueur dans un jeu de plateforme et de réflexion axé sur la narration, où chaque défi se déroule dans un paysage peint à la main, explorant les métaphores et les frontières insaisissables de la perception et du sens.
                    </span>
                </div>
                <div className="produit-description1">
                    <span className="produit-texte17">EXPERIENCE ARTISTIQUE</span>
                </div>
                <div>
                    <span className="produit-texte16">
                        Unleaving est autant un jeu vidéo qu'une série étendue de peintures et de dessins multimédias. Chaque image est une peinture à la main, intégrant parfaitement des éléments de casse-tête en crayon et en graphite. Les visuels prennent vie grâce à une animation de peinture traditionnelle. S'engageant à l'originalité, chaque scène est nouvelle, sans répétition. Chaque chapitre est basé sur un thème spécifique qui guide l'ambiance, l'émotion et l'histoire, et influence par extension les couleurs et le style.
                    </span>
                </div>
                <div className="produit-description1">
                    <span className="produit-texte16">
                        À travers le gameplay comprenant des énigmes et des défis basés sur les compétences, étroitement intégrés dans la trame de l'histoire, les joueurs sont invités à s'immerger dans cette expérience émotionnelle.
                    </span>
                </div>
                <div className="produit-description1">
                    <span className="produit-texte18">Galerie</span>
                </div>
                <div>
                    <video width="50%" controls>
                        <source src="/assets/unleaving-video.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    );
}
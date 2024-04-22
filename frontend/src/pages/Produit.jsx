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
import unleaving1 from '../assets/unleaving1.png';
import unleaving2 from '../assets/unleaving2.png';
import unleaving3 from '../assets/unleaving3.png';
import unleaving4 from '../assets/unleaving4.png';
import iconAlerte from '../assets/iconAlerte.svg';
import shopping from '../assets/shopping.svg';
import kinguin from '../assets/kinguin.png';
import star from '../assets/star.svg';
import greenman from '../assets/greenman.png';
import g2a from '../assets/g2a.png'; 
import yuplay from '../assets/yuplay.png';
import instantgaming from '../assets/instantgaming.png';
import furiko from '../assets/furiko.png';
import gamesplanet from '../assets/gamesplanet.svg';
import steam from '../assets/steam1.png'
import epicgames from '../assets/epicgames.png'
import A from '../assets/A.png'
import C from '../assets/C.png'
import N from '../assets/N.png'
import unleavingphoto from '../assets/unleavingphoto.png';
import { Link } from 'react-router-dom';


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
                <div className="unleavingphoto">
                    <img src={unleavingphoto}></img>
                </div>
                <div className="liste-photo">
                    <img src={unleaving1}></img>
                    <img src={unleaving2}></img>
                    <img src={unleaving3}></img>
                    <img src={unleaving4}></img>
                </div>
                <div className="bouton">
                    <img src={iconAlerte}></img>
                    <span className="produit-texte19">Mettre une alerte de prix</span>
                </div>
                <div className="texte1">
                    <span className="produit-texte20">Prix neuf</span>
                </div>
                <div className="ligne2">
                    <div className="texte2">
                        <span className="produit-texte21">Dream Harvest</span>
                    <div>
                        <span className="produit-texte22">Développeur indé</span>
                    </div>
                    </div>
                    <div className="bloc-prix">
                        <span className="prix2">16,78€</span>
                        <img src={shopping}></img>
                     </div>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={kinguin}></img>
                        <div className="dev">
                            <span className="titredev">Kinguin</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,6</span>
                            </div>
                        </div>
                    </div>
                    <div className="prixorange">
                        <span className="titreprix">3,99€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={greenman}></img>
                        <div className="dev">
                            <span className="titredev">Greenman Gaming</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,1</span>
                            </div>
                        </div>
                    </div>
                    <div className="prixorange">
                        <span className="titreprix">5,60€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={g2a}></img>
                        <div className="dev">
                            <span className="titredev">G2A</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,6</span>
                            </div>
                        </div>
                    </div>
                    <div className="prixorange">
                        <span className="titreprix">9,42€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={yuplay}></img>
                        <div className="dev">
                            <span className="titredev">Yuplay</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,6</span>
                            </div>
                        </div>
                    </div>
                    <div className="prixorange">
                        <span className="titreprix">11,78€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={instantgaming}></img>
                        <div className="dev">
                            <span className="titredev">Instant Gaming</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,6</span>
                            </div>
                        </div>
                    </div>
                    <div className="prixorange">
                        <span className="titreprix">12,25€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={furiko}></img>
                        <div className="dev">
                            <span className="titredev">Furiko</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,6</span>
                            </div>
                        </div>
                    </div>
                    <div className="prixorange">
                        <span className="titreprix">15,78€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={gamesplanet}></img>
                        <div className="dev">
                            <span className="titredev">Gamesplanet</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,6</span>
                            </div>
                        </div>
                    </div>
                    <div className="prixorange">
                        <span className="titreprix">15,78€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={steam}></img>
                        <div className="dev">
                            <span className="titredev">Steam</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,6</span>
                            </div>
                        </div>
                    </div>
                    <div className="prixorange">
                        <span className="titreprix">16,00€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={epicgames}></img>
                        <div className="dev">
                            <span className="titredev">Epic Games</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,6</span>
                            </div>
                        </div>
                    </div>
                    <div className="prixorange">
                        <span className="titreprix">16,50€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
                <div className="texte1">
                    <span className="produit-texte20">Prix d'occasion</span>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={A}></img>
                        <div className="dev">
                            <span className="titredev">artugaming724</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,6</span>
                            </div>
                        </div>
                    </div>
                    <Link to="/annonces">
                        <div className="prixorange">
                            <span className="titreprix">6,50€</span>
                            <img src={shopping}></img>
                        </div>
                    </Link>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={C}></img>
                        <div className="dev">
                            <span className="titredev">cedricolino</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,6</span>
                            </div>
                        </div>
                    </div>
                    <div className="prixorange">
                        <span className="titreprix">9,70€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
                <div className="dev1">
                    <div className="devkin">
                        <img src={N}></img>
                        <div className="dev">
                            <span className="titredev">cedricolino</span>
                            <div>
                                <img src={star}></img>
                                <span className="note">4,6</span>
                            </div>
                        </div>
                    </div>
                    <div className="prixorange">
                        <span className="titreprix">9,99€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
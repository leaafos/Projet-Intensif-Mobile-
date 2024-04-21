import React from 'react';
import '../styles/produit2.css';
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
import neuronet1 from '../assets/neuronet1.png';
import neuronet2 from '../assets/neuronet2.png';
import neuronet3 from '../assets/neuronet3.png';
import neuronet4 from '../assets/neuronet4.png';
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
import neuronetphoto from '../assets/neuronetphoto.png';

export default function Produit() {
    return (
        <div className="produit-container">
            <div className="produit-header">
                <img src={Logo} alt="Logo" className="produit-logo" />
            </div>
            <div className="produit-content">
                <div className="produit-title-section">
                    <h4 className="produit-titreJeu">NeuroNet</h4>
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
                    <span className="prix">55,90€</span>
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
                        NeuroNet: Mendax Proxy
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                        <b>QU'EST-CE QUE NEURONET: MENDAX PROXY</b>
                    </span>
                </div>
                <div className="produit-description1">
                    <span className="produit-texte16">
                        - Narration évolutive
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                        - Dilemmes moraux
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                        - Des choix qui ont du poids  
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                        - Un casting divers et varié    
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                        - Événements évolutifs   
                    </span>
                </div>
                <div>
                    <span className="produit-texte16">
                        - Un univers riche  
                    </span>
                </div>
                <div className="produit-description1">
                    <span className="produit-texte16">
                        NeuroNet est un jeu de gestion urbaine narratif où vous devez maintenir l'équilibre entre les besoins et les désirs de ses nombreux citoyens, afin de déterminer la destinée d'une ville post-cyberpunk à l'orée d'une nouvelle ère numérique.
                    </span>
                </div>
                <div className="produit-description1">
                    <span className="produit-texte17">MODELEZ LA VIE DES GENS QUE VOUS RENCONTREZ</span>
                </div>
                <div>
                    <span className="produit-texte16">
                        Au fil de votre progression, vous tisserez des liens avec de nombreux citoyens de Catena. Entretenez ces relations et apprenez-en plus sur les luttes et les croyances des citoyens, et aidez-les (ou empêchez-les) à réaliser leurs rêves. Vos choix ont le pouvoir d'influencer le cours de leur vie, pour le meilleur ou pour le pire.
                    </span>
                </div>
                <div className="produit-description1">
                    <span className="produit-texte17">ÉQUILIBREZ LES BESOINS DE LA VILLE</span>
                    <span className="produit-texte16">
                        Visualisez l'impact de vos actions à l'aide de rapports urbains qui ne détaillent pas seulement vos choix, mais aussi comment la ville évolue en fonction de vos décisions. L'avis des citadins envers vous changera : ferez-vous une différence dans leur vie ou ferez-vous tout s'écrouler ?
                    </span>
                </div>
                <div className="produit-description1">
                    <span className="produit-texte17">RÉALISEZ LES RÉPERCUSSIONS DE VOS CHOIX</span>
                    <span className="produit-texte16">
                        La frontière entre le bien et le mal ne cesse de s'affiner à mesure que votre moralité est testée face aux nombreuses demandes que vous devez traiter. Qui servez-vous vraiment ? Les personnes qui vous ont construit ? Les citoyens qui dépendent de vous ? Vous-même ?
                    </span>
                </div>
                <div className="produit-description1">
                    <span className="produit-texte18">Galerie</span>
                </div>
                <div className="unleavingphoto">
                    <img src={neuronetphoto}></img>
                </div>
                <div className="liste-photo">
                    <img src={neuronet1}></img>
                    <img src={neuronet2}></img>
                    <img src={neuronet3}></img>
                    <img src={neuronet4}></img>
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
                        <span className="prix2">55,90€</span>
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
                        <span className="titreprix">5,50€</span>
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
                    <div className="prixorange">
                        <span className="titreprix">6,50€</span>
                        <img src={shopping}></img>
                    </div>
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
                        <span className="titreprix">6,50€</span>
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
                        <span className="titreprix">6,50€</span>
                        <img src={shopping}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
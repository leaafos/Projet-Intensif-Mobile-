import React from 'react';
import '../styles/homepage.css'
import { Link } from 'react-router-dom';
import headup from'../assets/headup.png';
import d from '../assets/d.png';
import nl from '../assets/nl.png'; 
import Monsieur from '../assets/CONNEXION.png';
import Match from '../assets/match.png';
import Trophe1 from '../assets/trophe1.png';
import Trophe2 from '../assets/trophe2.png';
import Trophe3 from '../assets/trophe3.png';
import Background2 from '../assets/background2.png';
import Background from '../assets/BACKGROUND.png';
import neuronet from '../assets/neuronet2.png';
import unleaving from '../assets/unleaving2.png';
import  ripout from '../assets/ripout.png';
import  killer from '../assets/killer.png';
import  chants from '../assets/chants.png';
import  garden from '../assets/garden.png';
import  asobu from '../assets/asobu.png';
import  indie from '../assets/indie.png';
import recom from '../assets/recom.png';
import  inliving from '../assets/inliving.png';
import  street from '../assets/Street.png';
import  hauma from '../assets/hauma.png';
import  dwarfheim from '../assets/dwarfheim.png';
import  karboard from '../assets/karboard.png';
import  categories from '../assets/categories.png';
import Home2 from '../assets/amelya.png';
import BurgerMenu from '../components/BurgerMenu';

//const reponse = await fetch("http://localhost:3000/produits");
//const produits = await reponse.json();
{/*
const Homepage = () => {
    return (
        <div className="homepage content">
                <div className="background">
                    <img src={Background2}/>
                    <img src={Background}/>
                </div>
                <div className="empty">&nbsp;</div>
                <div className="title">
                    <h2>Mes Gears</h2>
                </div>  
                <div className="features">
                    <div className="scrollable-content">
                        <div className="square2"> 
                        <div  className='unleaving '> <img src={unleaving}></img> 
                              </div> 
                        </div>
                        <div className="square13">
                        <div className='neuronet2'> <img src={neuronet}></img> 
                        </div> 
                       </div>             
                    </div>
                </div>
                <div className="title2">
                    <div className="round-image">
                        <h4 className='Leaders'>Leaders indé du mois !</h4>
                        <img src={Monsieur} className="monsieur"></img>
                    </div>
                    <div id='trophe'>
                        <img src= {Trophe1}></img> 
                        <img src= {Trophe2}></img>
                        <img src= {Trophe3}></img>
                    </div>          
                    <div id='icons'>
                        <img src= {headup}></img> 
                        <img src= {d}></img>
                        <img src= {nl}></img>
                    </div>              
                </div>
                <div className="title3">
                    <h2>Mes recommantations</h2>
                </div>
                <div className="features">
                    <div className="scrollable-content">
                        <div className="square1">
                        <div className='ripout'> <img src={recom}></img> 
                              </div> 
                       </div>
                        
                    </div>
                </div>

                <div className="parti3">
                        <div className="image">
                        <img src={Match}></img>
                        </div>
                        <h3 className="orange"> Match avec jeu </h3>
                        <p className="texte"> Trouve le jeu qui correspond à tes 
                            envies et préférence grâce à Swipe fait pour TOI.</p>

                            <div className="title4">
                        <Link to="/swipe">
                            <button className="gauche"></button>
                            <p className="texte2">Commence le Match</p>
                        </Link>
                        
                        </div>                     
                </div>

                <div className="title5">
                    <h2>Best Sellers</h2>
                </div>
                <div className="features">
                    <div className="scrollable-content">
                        <div className="square5">
                        <div  className='asobu'> <img src={asobu}></img> 
                              </div> 
                           </div>

                        <div className="square6"> 
                        <div  className='indie'> <img src={indie}></img> 
                              </div> 
                        </div>

                        <div className="square7"> 
                        <div  className='inliving'> <img src={inliving}></img> 
                              </div> 
                         </div>

                        <div className="square8"> 
                        <div  className='street'> <img src={street}></img> 
                              </div> 
                        </div>
                    </div>
                </div>

                <div className="title6">
                    <h2>Jeux d'occasion</h2>
                </div>
                <div className="features">
                    <div className="scrollable-content">
                        <div className="square9"> 
                        <div  className='hauma'> <img src={hauma}></img> 
                              </div> 
                        </div>

                        <div className="square10">
                        <div  className='dwarfheim'> <img src={dwarfheim}></img> 
                              </div> 
                           </div>
                        <div className="square11"> 
                        <div  className='karboard'> <img src={karboard}></img> 
                              </div>
                        </div>
                    </div>
                </div>

                <div className="title7">
                    <h2>Categories</h2>
                </div>
                <div className="features">
                    <div className="scrollable-content">
                        <div className="square12">
                        <div  className='categories'> <img src={categories}></img> 
                              </div>
                              </div>
                    </div>
                </div>


            </div>

    );
}

export default Homepage;*/}

export default function HomePage() {
    return (
        <div className='amelya'>

            <Link to="menu">
                <div className='header-amelya'>
                <img src={Home2}></img>
                </div>
            </Link>

        </div>

    )
}







/*export default function HomePage  () {
    return (
    <div className="homepage">
       <h1>Accueil </h1>
        <p>Bienvenue dans la page d'accueil !</p>
       <Link to="/produit">
           <button>Voir la page produit </button>
        </Link>
       <Link to="/produit">
           <button>Voir la page favoris </button>
        </Link>
        <Link to="/produit">
           <button>Voir la page profil </button>
        </Link>
        <Link to="/produit">
            <button>Voir la page swipe </button>
        </Link>
   </div>
   )
}
*/



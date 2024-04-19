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
import Backgrond2 from '../assets/background2.png'


const Homepage = () => {
    return (
        <div className=" content">
                <div className="empty">&nbsp;</div>
                <div className="title">
                    <h2>Recommandations</h2>
                </div>
                <div className="features">
                    <div className="scrollable-content">
                        <div className="square">
                <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                            </div>
                            <span>carre 1</span>
                        </div>

                        <div className="square">
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                            </div>
                        <span> carre 2</span>
                        </div>

                        <div className="square">
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                                </div>
                        <span> carre 3 </span> 
                        </div>

                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div>
                      <span> carre 4 </span>  
                      </div>
            
                    </div>
                </div>
                <div className="title2">
                    <div className="round-image">
                        <h4 className='Leaders'>Leaders indé du mois !</h4>
                        <image src={Backgrond2}></image>
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
                <div className="title">
                    <h2>Best Sellers</h2>
                </div>
                <div className="features">
                    <div className="scrollable-content">
                        <div className="square">
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div> 
                              <span> carre 1 </span>
                              </div>

                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div> 
                       <span> carre 2 </span> 
                       </div>

                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div> 
                        <span> carre 3</span>
                        </div>

                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div> 
                        <span> carre 4</span> 
                </div>
                        
                    </div>
                </div>

                <div className="parti3">
                        <div className="image">
                        <img src={Match}></img>
                        </div>
                        <h3 className="orange"> Match avec jeu </h3>
                        <p> Trouve le jeu qui correspond à tes 
                            envies et préférence grâce à 
                            Swipe fait pour TOI.</p>

                            <div className="title">
                        <Link to="/swipe">
                            <button className="gauche">Commence le Match</button>
                        </Link>
                        
                        </div>                     
                </div>

                <div className="title">
                    <h2>Derniere sorties</h2>
                </div>
                <div className="features">
                    <div className="scrollable-content">
                        <div className="square">
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div> 
                           <span> carre 1 </span>
                           </div>

                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div> 
                              <span> carre 2  </span>
                        </div>

                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div> 
                         <span> carre 3 </span>
                         </div>

                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div> 
                        <span> carre 4 </span>
                        </div>
                        <div className="square">
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div>  
                        <span>carre 5 </span>
                        </div>
                    </div>
                </div>

                <div className="title">
                    <h2>Jeux d'occasion</h2>
                </div>
                <div className="features">
                    <div className="scrollable-content">
                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div> 
                        <span>carre 1 </span>
                        </div>

                        <div className="square">
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div> 
                           <span> carre 2 </span>  
                           </div>
                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div>
                        <span> carre 3 </span>
                        </div>

                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div>
                       <span> carre 4 </span>
                       </div>
                    </div>
                </div>

                <div className="title">
                    <h2>Categories</h2>
                </div>
                <div className="features">
                    <div className="scrollable-content">
                        <div className="square">
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div>
                          <span> carre 1 </span> 
                          </div>

                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div>
                        <span> carre 2</span>
                        </div>

                        <div className="square"> 
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div>
                        <span> carre 3 </span>
                        </div>
                        <div className="square">
                        <div className='blockInner' style={{backgroundImage: 'url(${})'}}>
                              </div>
                             <span> carre 4 </span>
                              </div>
                    </div>
                </div>


            </div>

    );
}

export default Homepage;







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



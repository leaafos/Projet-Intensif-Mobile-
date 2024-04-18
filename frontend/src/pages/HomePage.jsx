import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css'

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
                <div className= "title">
                    <h2>Leaders indé 
                        du mois !</h2>
                        <img src="image 64.png"alt="Image 1" className="round-image" />
                        <img src="image 63.png" alt="Image 2" className="round-image" />
                        <img src="image 62.png" alt="Image 3" className="round-image" />

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



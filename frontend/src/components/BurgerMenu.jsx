import React, { useState } from 'react';
import '../styles/burgerMenu.css'
import { Link } from 'react-router-dom';
import notificationIcon from  '../assets/notifications.svg';
import messageIcon from '../assets/messages.svg';
import orange from '../assets/orange.svg'

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("je marche")
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Recherche soumise:", searchTerm);
        setSearchResult("Resultat de la recherche");
        setSearchTerm('');
    };

    const handleClickSearch = (event) => {
        event.stopPropagation();
    };

    console.log("Rendu du composant BurgerMenu");

    return (
        <div>
            <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
            <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`menu-button ${isOpen ? 'open' : ''}`}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                {isOpen && (

                    <div className="menu-content">

                        <form onSubmit={handleSubmit} className="search-form">
                            <div className="search-container">
                                <input
                                    type= "text"
                                    placeholder="Rechercher un jeu"
                                    value={searchTerm}
                                    onChange={handleChange}
                                    onClick={handleClickSearch}
                                />
                                <button type="submit" className="search-button" onClick={handleClickSearch}></button>
                            </div>
                        </form>

                        <Link to="/pc">
                            <button className='bouton-pc'>  </button>   
                        </Link>
                    
                        <Link to="/playstation">
                            <button className='bouton-playstation'>  </button>
                        </Link>
                        
                        <Link to="/xbox">
                            <button className='bouton-xbox'></button> 
                        </Link>

                        <Link to="/nintendo">
                            <button className='bouton-nintendo'></button> 
                        </Link>
                        
                        <Link to="/swipe">
                            <button className="match-jeu">Match avec un jeu ! </button>    
                        </Link>

                        <div className="bottom-content" onClick={handleClickSearch}>

                            <Link to="/produit">
                                <button className="bouton-notifications">
                                    <img className="notificon" src={notificationIcon}></img>  
                                    <img className="orange" src={orange}></img>    
                                    <p>Notifications </p>
                                </button>
                            
                            </Link>

                            <Link to="/annonces">
                                <button className="bouton-messages"> 
                                    <img src={messageIcon}></img>    
                                    <p>Messages </p>
                                </button>    
                            </Link>

                            <div className="circle"></div>

                        </div>
                    
                    </div>
                )}
            </div>
        </div>
        
    )

}


export default BurgerMenu;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import notificationIcon from '../assets/notifications.svg';
import messageIcon from '../assets/messages.svg';
import orange from '../assets/orange.svg';
import '../styles/burgerMenu.css';

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
                                    type="text"
                                    placeholder="Rechercher un jeu"
                                    value={searchTerm}
                                    onChange={handleChange}
                                    onClick={handleClickSearch}
                                />
                                <button type="submit" className="search-button" onClick={handleClickSearch}></button>
                            </div>
                        </form>

                        {/* Liens vers d'autres pages */}
                        {/* ... */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default BurgerMenu;



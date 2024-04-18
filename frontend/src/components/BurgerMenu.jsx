import React, { useState } from 'react';
import '../styles/burgerMenu.css'
import { Link } from 'react-router-dom';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Recherche soumise:", searchTerm);
    };

    return (
        <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className={`menu-button ${isOpen ? 'open' : ''}`}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {isOpen && (

                <div className="menu-content">

                    <form onSubmit={handleSubmit}>
                        <input
                            type= "text"
                            placeholder="Rechercher..."
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        <button type="submit">Rechercher</button>
                    </form>

                    <Link to="/pc">
                        <button className='bouton-pc'>  </button>   
                    </Link>
                
                    <Link to="/playstation">
                        <button className='bouton-playstation'>  </button>
                    </Link>
                    
                    <Link to="/nintendo">
                        <button className='bouton-nintendo'></button> 
                    </Link>
                    
                    <Link to="/swipe">
                        <button className="match-jeu">Match avec un jeu ! </button>    
                    </Link>
                
                </div>
            )}
        </div>
        
    )

}


export default BurgerMenu;


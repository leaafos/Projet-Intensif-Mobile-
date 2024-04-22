
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/burgerMenu.css';
import notificationIcon from  '../assets/notifications.svg';
import messageIcon from '../assets/messages.svg';
import orange from '../assets/orange.svg'

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    return (
                <div>
                    <div className="menu-content">

        <form  className="search-form">
            <div className="search-container">
                <input
                    type= "text"
                    placeholder="Rechercher un jeu"
                    value={searchTerm}
                />
                <button type="submit" className="search-button" ></button>
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

        <div className="bottom-content" >

            <Link to="/produit">
                <button className="bouton-notifications">
                    <img className="notificon" src={notificationIcon}></img>  
                    <img className="orange" src={orange}></img>    
                    <p>Notifications </p>
                </button>
            
            </Link>

            <Link to="/profil">
                <button className="bouton-messages"> 
                    <img src={messageIcon}></img>    
                    <p>Messages </p>
                </button>    


                <div className="circle"></div>
            </Link>



        </div>

        </div>
        </div>
    )
}


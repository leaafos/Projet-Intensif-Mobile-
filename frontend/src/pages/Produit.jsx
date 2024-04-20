import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/produit.css'
import Logo from '../assets/LOGO.svg';
import BurgerMenu from '../components/BurgerMenu';


export default function Produit() {
    return (
        <div className="produit">
            <div className='header'>
                <img src={Logo} alt="Logo"></img>
                <BurgerMenu></BurgerMenu>
            </div>
            <div className="titre">
                <h4>UNLEAVING</h4>
c            </div>
            <Link to="/annonces">
                <button>Voir les annonces </button>
            </Link>
            <Link to="/">
                <button>Retour au menu </button>
            </Link>
        </div>
    )
}
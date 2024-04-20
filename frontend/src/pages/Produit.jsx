import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/produit.css'
import Logo from '../assets/LOGO.svg';
import narratif from '../assets/narratif.svg';
import aventure from '../assets/aventure.svg';
import BurgerMenu from '../components/BurgerMenu';
import unleaving from '../assets/unleaving-produit.png';
import cloche from '../assets/cloche.svg';
import favoris from '../assets/favoris.svg';


export default function Produit() {
    return (
        <div className="produit">
            <div className="header">
                <img src={Logo} alt="Logo"></img>
            </div>
            <div>
                <h4 className="titreJeu">UNLEAVING</h4>
                <img src={cloche} className="cloche"></img>
                <img src={favoris} className="favoris"></img>
            </div>
            <div>
                <div className='categorie1'>
                    <img src={narratif}></img>
                    <span className='titreCategorie1'>Narratif</span>
                </div>
                <div className='categorie2'>
                    <img src={aventure}></img>
                    <span className='titreCategorie2'>Aventure</span>
                </div>
            </div>
        </div>
    )
}
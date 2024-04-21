import React from 'react';
import '../styles/annonce.css';
import Etoile from '../assets/etoile.svg';
import EtoileVide from '../assets/etoile-vide.svg';
import { Link } from 'react-router-dom';


export default function Annonces() {
    return (
        <div className='annonce'>
            <div className='header-annonce'>
            </div>
            <div className='head'>
            </div>
            <div className='banderole'>
                <p>Vérification de l’article disponible  </p>
            </div>
            <div className='profil-artu'>
                <div className='A'>
                    <h1>A</h1>
                </div>
               <div className='profil'>
                    <p><b>ArtuGaming724</b></p>
                    <div className='etoiles'>
                        <img src={Etoile}></img>
                        <img src={Etoile}></img>
                        <img src={Etoile}></img>
                        <img src={Etoile}></img>
                        <img src={EtoileVide}></img>
                    </div>
                    
               </div>
               <div className='bouton-annonce'> 
                    <Link to="/messages">
                        <button> Message </button>
                    </Link>
               </div>
            </div>

            <div className='jeu'>
                <h2>Jeu Unleaving</h2>
                <div className='prix-jeu'>
                    <p className='prix-jeu-txt'><b>6,50€</b></p>
                    <p className='neuf'>- Neuf</p>
                </div>
            </div>

            <div className='description'>
                <p className='gris'>Descriptif du jeu</p>
                <p className='normal'>Comme neuf, ce jeu est...</p>
                <p className='jaune'>plus</p>
            </div>

            <div className='offre'>
                <div className='frais'>
                    <p>Frais de port</p>
                    <p className='gratos'>GRATUIT</p>
                </div>
                <button className='faire-une-offre'>Faire une offre</button>
                <button className='acheter'>Acheter</button>
            </div>

            <div className='section'>

                <div className='derniere-section'>
                <div className='par1'>
                    <p className='normal'>Pour tout achat effectué par le biais du bouton “Acheter”, nous appliquons des frais couvrant notre</p>
                    <p className='jaune-par1'>protection acheteurs...</p>
                </div>
                <div className='par2'>
                    <p className='normal'>Cette protection acheteurs comprend notre</p>
                    <p className='jaune-par2'> Politique </p>
                    <p className='jaune-par2-2'>de remboursement</p>
                </div>

                </div>
                
            </div>
            

            <div className='espace-libre'>

            </div>

        </div>
    )
}
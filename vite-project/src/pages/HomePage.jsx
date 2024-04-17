import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css'


//Ici c'est notre home page 


export default function HomePage  () {
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



/*
Toutes les pages : 
Home page ---- afficher des trucs 
Page produit ---- afficher des trucs 

Page liste annonces ---- afficher des trucs 
Page profil ---- afficher des trucs 

Page messagerie --- un peu différent 
Page favoris ---- afficher des trucs 

Page se connecter/s'inscrire 
Page inscritpion 


Swipe ---- un peu différent 

Autres : 
Alertes c'est un pop 
les annonces sont dans la page produit 
*/
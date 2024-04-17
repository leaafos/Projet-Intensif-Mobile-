import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/produit.css'

export default function Produit() {
    return (
        <div className="produit">
            <h1>Page Produit</h1>
            <p>Bienvenue dans la page produit !</p>
            <Link to="/annonces">
                <button>Voir les annonces </button>
            </Link>
            <Link to="/">
                <button>Retour au menu </button>
            </Link>
        </div>
    )
}
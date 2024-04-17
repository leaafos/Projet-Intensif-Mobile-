import React from 'react';
import { Link } from 'react-router-dom';

export default function Produit() {
    return (
        <div>
            <h1>Page Produit</h1>
            <p>Bienvenue dans la page produit !</p>
            <Link to="/annonces">
                <button>Voir les annonces </button>
            </Link>
        </div>
    )
}
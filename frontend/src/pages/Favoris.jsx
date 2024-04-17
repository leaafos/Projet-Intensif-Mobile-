import React from 'react';
import { Link } from 'react-router-dom';

export default function Favoris() {
    return (
        <div>
            <h1>Page Favoris</h1>
            <p>Bienvenue dans la page favoris !</p>
            <Link to="/">
                <button>Retour au menu </button>
            </Link>
        </div>
    )
}
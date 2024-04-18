import React from 'react';
import { Link } from 'react-router-dom';

export default function Swipe() {
    return (
        <div>
            <h1>Page Swipe</h1>
            <p>Bienvenue dans la page profil !</p>
            <Link to="/">
                <button>Retour au menu </button>
            </Link>
        </div>
    )
}
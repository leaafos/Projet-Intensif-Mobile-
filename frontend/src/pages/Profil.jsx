import React from 'react';
import { Link } from 'react-router-dom';

export default function Profil() {
    return (
        <div>
            <h1>Page Profil</h1>
            <p>Bienvenue dans la page profil !</p>
            <Link to="/">
                <button>Retour au menu </button>
            </Link>
        </div>
    )
}
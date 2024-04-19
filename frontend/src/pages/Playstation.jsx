import React from 'react';
import { Link } from 'react-router-dom';

export default function Playstation() {
    return (
        <div>
            <h1>Page Playstation</h1>
            <p>Bienvenue dans la page Playstation !</p>
            <Link to="/">
                <button>Retour au menu </button>
            </Link>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function Xbox() {
    return (
        <div>
            <h1>Page Xbox</h1>
            <p>Bienvenue dans la page Xbox !</p>
            <Link to="/">
                <button>Retour au menu </button>
            </Link>
        </div>
    )
}
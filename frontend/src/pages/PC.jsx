import React from 'react';
import { Link } from 'react-router-dom';

export default function PC() {
    return (
        <div>
            <h1>Page PC</h1>
            <p>Bienvenue dans la page PC !</p>
            <Link to="/">
                <button>Retour au menu </button>
            </Link>
        </div>
    )
}
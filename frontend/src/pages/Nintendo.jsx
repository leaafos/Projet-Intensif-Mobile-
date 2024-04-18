import React from 'react';
import { Link } from 'react-router-dom';

export default function Nintedo() {
    return (
        <div>
            <h1>Page Nintedo</h1>
            <p>Bienvenue dans la page Nintedo !</p>
            <Link to="/">
                <button>Retour au menu </button>
            </Link>
        </div>
    )
}
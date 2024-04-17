import React from 'react';
import { Link } from 'react-router-dom';

export default function Messages() {
    return (
        <div>
            <h1>Page Messages</h1>
            <p>Bienvenue dans la page messages !</p>
            <Link to="/">
                <button>Retour au menu </button>
            </Link>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu.jsx';

export default function Annonces() {
    return (
        <div>
            <h1>Page Annonces</h1>
            <p>Bienvenue dans la page annonces !</p>
            <Link to="/">
                <button>Retour au menu </button>
            </Link>
            <Menu />
        </div>
    )
}
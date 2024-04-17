import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/produit">Produit</Link></li>
                {/* Ajoute d'autres éléments de menu au besoin */}
            </ul>
        </nav>
    );
}



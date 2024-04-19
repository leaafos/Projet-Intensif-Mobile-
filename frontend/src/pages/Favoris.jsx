import React from 'react';
import { Link } from 'react-router-dom';
import enregistrement from '../assets/enregistrement.png';
import '../styles/favoris.css';

export default function Favoris() {
    return (
        <div className="favoris-container" >
            <img src={enregistrement} alt="Enregistrement" />
            <div className="titre3">
            <h1>Gears</h1>
        </div>
        <div className="titre4">
        <h2> 8 Pins</h2>
        </div>
        </div>
    );
}

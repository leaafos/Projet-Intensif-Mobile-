import React from "react";
import '../styles/overlay.css';
import Check from '../assets/check-paiement.svg';
import { Link } from 'react-router-dom';


export default function Overlay() {
    return (
        <div className="full-page-overlay">
        <div className="overlay-content">
          <div>
            <h4>Confirmation de paiement ! </h4>
            <p>Merci pour votre commande </p>
           <span><b>#173913618</b></span>
          </div>
           
           <img src={Check}></img>

          <div className="bouton">
            <Link to="/">
               <button >Menu</button>
            </Link>
           
          </div>
          
        </div>
      </div>
    );
}
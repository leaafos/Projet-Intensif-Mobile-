import React from "react";
import '../styles/overlay.css';
import Check from '../assets/check-paiement.svg'


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
            <button >Menu</button>
          </div>
          
        </div>
      </div>
    );
}
import React from 'react';
import homeAlan from '../assets/HomePage.png';
import '../styles/home.css';
import { Link } from 'react-router-dom';

export default function HomeAlanPost() {
    return (
        <div className='fond'>
            
            <Link to="/produit">
                <img src={homeAlan}></img>
            </Link>

        </div>

    )
}
import React from 'react';
import home from '../assets/home2.png';
import '../styles/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='fond'>
            
            <Link to="/swipe">
                <img src={home}></img>
            </Link>

        </div>

    )
}
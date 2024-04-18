import React, { useState } from 'react';
import '../styles/connexion.css';
import BurgerMenu from '../components/BurgerMenu';
import Monsieur from '../assets/CONNEXION.png';

export default function Connexion() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nom d\'utilisateur: ', username);
        console.log('Mot de passe: ', password);
    };

    return (
        <div className='body'>
            <div className='header'>
                <BurgerMenu />
            </div>
            <div className='titre'>
                 <h1>Bon retour parmi nous les Shmupers !</h1>
            </div>
            <div className='logs'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder="Nom d'utilisateur ou Email"
                            id='username'
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='password'
                            placeholder="Mot de passe"
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img src={Monsieur} className="overlay-image"></img>
                    </div>

                    <div className='line-container'>
                        <div class="line_1"></div>
                        <div class="text">se connecter avec</div>
                        <div class="line_2"></div>
                    </div>

                    <div className='plateformes'>
                        
                    </div>

                    <button type='submit'>Se connecter</button>
                </form>
            </div>
        </div>
    )
}
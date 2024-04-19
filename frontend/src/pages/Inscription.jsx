import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Monsieur from '../assets/CONNEXION.png';
import twitch from '../assets/twitch.png';
import google from '../assets/google.png';
import steam from '../assets/steam.png';
import '../styles/inscription.css';

export default function Inscription() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

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
                 <h1>Rentre dans la HuntSquad</h1>
            </div>
            <div className='logs'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder="Nom d'utilisateur"
                            id='username'
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder="Email"
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder="Mot de passe"
                            id='motDePasse'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='password'
                            placeholder="Confirmez votre mot de passe"
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img src={Monsieur} className="overlay-image"></img>
                    </div>

                    <div className='line-container'>
                        <div className="line_1"></div>
                        <div className="text">s'identifier avec</div>
                        <div className="line_2"></div>
                    </div>

                    <div className='plateformes'>
                        <img src={twitch}></img>
                        <img src={google}></img>
                        <img src={steam}></img>
                    </div>

                    <button type='submit' className='soumettre'>S'inscrire</button>

                    <div className='inscription'>
                        <p>Dejà un compte ? </p>
                        <div className='bleu'> Se connecter</div>
                    </div>
                </form>
            </div>
        </div>
    )
}
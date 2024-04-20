import React, {useState} from 'react';
import '../styles/messages.css';
import { Link } from 'react-router-dom';
import Flèche from '../assets/fleche.svg';
import Infos from '../assets/infos.svg';
import Jeu from '../assets/image-jeu.png';
import Etoile from '../assets/etoile.svg';
import EtoileVide from '../assets/etoile-vide.svg';
import Monsieur from '../assets/CONNEXION.png'

export default function Messages() {
    const [message, setMessage] = useState("");

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div className='messages-page'>


            <div className='header-messages'>
                <img src={Flèche}></img>
                <span><b>ArtuGaming724</b></span>
                <img src={Infos}></img>
            </div>
            <div className='produit-messages'>
                <img src={Jeu}></img>
                <div className='vendeur'>
                    <span><b>ArtuGaming724</b></span>
                    <p>6,50€</p>
                </div>
            </div>
            <div className='boutons-messages'>
                <button className='voir-produit'>
                    Voir le jeu
                </button>
                <Link to='/paiements'>
                    <button className='acheter-produit'>
                        Acheter
                    </button>
                </Link>
            </div>


            <div className='conversation'>
                <div className='messages-users'>
                    <div className='premier-message'>
                        <p>Bonjour ! Moi c'est ArtuGaming724</p>
                        <div className='étoiles'>
                            <img src={Etoile}></img>
                            <img src={Etoile}></img>
                            <img src={Etoile}></img>
                            <img src={Etoile}></img>
                            <img src={EtoileVide}></img>
                        </div>
                        <div className='localisation'>
                            <p>France, Paris 14</p>
                        </div>
                        <div className='connection'>
                            <p>Connecté.e il y a 30 minutes</p>
                        </div>
                    </div>

                    <div className='monsieur'>
                        <img src={Monsieur}></img>
                    </div>

                    <div className='message-2'>
                        <p>Yo mec ! ton offre m’intérrese grave, je viens de découvrir ce jeu via le match, il m’a tapé à l’oeil.  </p>
                    </div>

                    <div className='message-3'>
                        <p>T’en à pensé quoi de ce jeu toi ? si tu y as joué  </p>
                    </div>

                    <div className='message-4'>
                        <p>Hey ! grave content qu’il t’ai tapé à l’oeil !  </p>
                    </div>

                    <div className='message-5'>
                        <p>Ce jeu est juste INCROYAAABLLEE !!!!! </p>
                    </div>

                    <div className='message-6'>
                        <p>Si tu es à la recherche d’exploration ou encore dd’immerssion complète dans un monde parallèle; tu es sur la bonne voie ! </p>
                    </div>

                    <div className='message-7'>
                        <p>Perso c’est ce que j’ai le plus kiffer, ce sont les énigmes. Certaines sont parfois compliquées, mais c’est ce qui rend le jeu encore plus challengeant pour ma part  </p>
                    </div>

                    <div className='message-8'>
                        <p>Trop bien ! J’ACHÈTE   </p>
                    </div>

                    <div className='message-9'>
                        <p>Encore merci pour tes conseils mec !!</p>
                    </div>

                </div>

            </div>






            <div className='ecrire-message'>
            <div>
                <textarea
                    id="message"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Envoyez un message"
                />
                </div>
            </div>
        </div>
    )
}
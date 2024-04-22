import React, {useState} from 'react';
import '../styles/alertes.css';
import { Link } from 'react-router-dom';
import AlerteIcon from '../assets/alertes.svg';
import Croix from '../assets/croix.svg';
import Populasse from '../assets/background2-alertes.png';
import Check from '../assets/check.png';


function Alertes(){
    const [showForm, setShowForm] = useState(false);
    const [alertCreated, setAlertCreated] = useState(false);
    const [formData, setFormData] = useState({
        prix: '',
        console: '',
        region: '',
        suppression: '',
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        {/*envoi en backend ici */}
        setAlertCreated(true);
    };

    return (
        <div className='root'>
                <div className='overlay-alertes'>
                    <div className='formulaire-fond'>
                        <div className='form-container'>
                            <div className='haut-page'>
                                <button className="croix" onClick={() => setShowForm(false)}><img src={Croix}></img></button>
                            </div>
                            <p><b>Créer une alerte de prix</b></p>
                            <form onSubmit={handleFormSubmit}>
                                {/*question 1 */}
                                <div className='question'>
                                    <label htmlFor="prix">Je veux le jeu au prix de :</label>
                                    <input 
                                    type="number"
                                    placeholder="Prix"
                                    value={formData.prix}
                                    onChange={(e) => setFormData({...formData, prix: e.target.value})}
                                    required
                                    />
                                 </div>
                                 <div className='question'>
                                    <label htmlFor="console">Console jouée :</label>
                                    <select
                                        value={formData.console}
                                        onChange={(e) => setFormData({...formData, console: e.target.value})}
                                        required
                                    >
                                        <option value="">Console</option>
                                        <option value="PC">PC</option>
                                        <option value="Playstation">Playstation</option>
                                        <option value="Xbox">Xbox</option>
                                        <option value="Nintendo">Nintendo</option>
                                    </select>
                                 </div>
                                <div className='question'>
                                    <label htmlFor="region">Ma région de jeu :</label>
                                    <select
                                        value={formData.region}
                                        onChange={(e) => setFormData({...formData, region: e.target.value})}
                                        required
                                    >
                                        <option value="">Région</option>
                                        <option value="France">France</option> 
                                        <option value="Angleterre">Angleterre</option>
                                        <option value="Allemagne">Allemagne</option>
                                        <option value="Espagne">Espagne</option>
                                        <option value="Belgique">Belgique</option>
                                        <option value="Italie">Italie</option>
                                        <option value="Roumanie">Roumanie</option>
                                        <option value="Amériques">Amériques</option>
                                        <option value="Asie">Asie</option>
                                        <option value="Afrique">Afrique</option>
                                    </select>

                                </div>
                               <div className='question'>
                                    <label htmlFor="suppression">Supprimer cette alerte dans :</label>
                                    <select
                                        value={formData.suppression}
                                        onChange={(e) => setFormData({...formData, suppression: e.target.value})}
                                        required
                                    >
                                        <option value="Date">Date </option>
                                        <option value="Une semaine">Une semaine</option>
                                        <option value="1 mois">1 mois</option>
                                        <option value="6 mois">6 mois</option>
                                        <option value="1 an">1 an</option>
                                        <option value="5 an">5 ans</option>
                                    </select>
                               </div>
                               <Link to="/produit2">
                                    <div className='submit'>
                                        <button  type="submit">Créer l'alerte</button>
                                    </div> 
                               </Link>
                               
                            </form>
                        </div>
                    </div>
                </div>

            {/*Afficher l'alerte en overlay}
            {alertCreated &&(
                <div className='overlay-completed'>
                    <div className='alerte-créée'>
                        <button onClick={() => setAlertCreated(false)}><img src={Croix}></img></button>
                        <h1>Alerte posée</h1>
                        <p>Tu recevras par mail si des offres <br></br> correspondent à ton prix.</p>
                        <Link to="/">
                            <img src={Populasse} className='populasse'></img>
                        </Link>
                        <img src={Check} className='check'></img>
                        <div className='nOOb'>
                            <Link to="/">
                                <button >Au revoir nOOb</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            )*/}
        </div>
    )

}

export default Alertes;
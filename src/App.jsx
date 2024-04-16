import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'index.css';
import HomePage from '../vite-project/src/pages/HomePage';
import '../vite-project/src/pages/Favoris';
import '../vite-project/src/pages/Produit';
import '../vite-project/src/pages/ListeAnnonces';
import '../vite-project/src/pages/Profil';
import '../vite-project/src/pages/Messagerie';
import '../vite-project/src/pages/Swipe';

//on va importer des choses des pages : en gros import machin machin from la page
//là on va mettre les routes 
//on a la première route vers la homepage

const App = () => {
    <Router>
        <Swift>
            <Route exact path="/" component={HomePage}></Route> 
        </Swift>
    </Router>
}

export default App
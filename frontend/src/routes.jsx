import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import Produit from './pages/Produit.jsx';
import Annonces from './pages/ListeAnnonces.jsx';
import BurgerMenu from './components/BurgerMenu.jsx';
import Platform from './pages/Nintendo.jsx';
import Swipe from './pages/Swipe.jsx';
import Connexion from './pages/Connexion.jsx';
import Favoris from './pages/Favoris.jsx';
import Inscription from './pages/Inscription.jsx';
import Alertes from './components/Alertes.jsx';
import Paiements from './pages/Paiements.jsx';

function Routes () {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/produit" component={Produit}/>
                <Route exact path="/annonces" component={Annonces}/>
                <Route exact path="/menu" component={BurgerMenu}/>
                <Route exact path="/" component={Platform}/>
                <Route exact path="/swipe" component={Swipe}/>
                <Route exact path="/connexion" component={Connexion}/>
                <Route exact path="/favoris" component={Favoris}/>
                <Route exact path="/inscription" component={Inscription}/>
                <Route exact path="/alertes" component={Alertes}/>
                <Route exact path="/paiements" component={Paiements}/>
            </Switch>
        </Router>
    )
}

export default Routes;

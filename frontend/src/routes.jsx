import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import Produit from './pages/Produit.jsx';
import Annonces from './pages/ListeAnnonces.jsx';
import BurgerMenu from './components/BurgerMenu.jsx';
import Platform from './pages/Nintendo.jsx';
import Swipe from './pages/Swipe.jsx';
import Connexion from './pages/Connexion.jsx';
import Favoris from './pages/Favoris.jsx';

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
            </Switch>
        </Router>
    )
}

export default Routes;

/*
export default [
    {
        path: "/",
        element: <App />,
        children : [
            { path: "", element: <HomePage />}
        ]

    }
]*/
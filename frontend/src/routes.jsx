import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import Produit from './pages/Produit.jsx';
import Annonces from './pages/ListeAnnonces.jsx';
import BurgerMenu from './components/BurgerMenu.jsx';
import Nintedo from './pages/Nintendo.jsx';
import Xbox from './pages/Xbox.jsx';
import PC from './pages/PC.jsx';
import Swipe from './pages/Swipe.jsx';
import Playstation from './pages/Playstation.jsx';

function Routes () {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/produit" component={Produit}/>
                <Route exact path="/annonces" component={Annonces}/>
                <Route exact path="/menu" component={BurgerMenu}/>
                <Route exact path="/nintendo" component={Nintedo}/>
                <Route exact path="/xbox" component={Xbox}/>
                <Route exact path="/pc" component={PC}/>
                <Route exact path="/swipe" component={Swipe}/>
                <Route exact path="/playstation" component={Playstation}/>
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
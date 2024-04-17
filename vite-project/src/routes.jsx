import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import Produit from './pages/Produit.jsx';

function Routes () {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/produit" component={Produit}/>
                
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
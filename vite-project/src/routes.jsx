import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
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
function Routes () {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                
            </Switch>
        </Router>
    )
}

export default Routes;


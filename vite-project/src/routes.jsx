import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";

export default [
    {
        path: "/",
        element: <App />,
        children : [
            { path: "", element: <HomePage />}
        ]

    }
]
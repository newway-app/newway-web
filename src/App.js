import React, {useContext} from 'react';
import './styles/app.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import {Redirect} from "react-router";
import {AuthContext} from "./context/AuthContext";

const App = () => {
    // const [user, setUser] = useState(null);
    // const userProvider = useMemo(() => ({user, setUser}), [user, setUser]);
    const isAuth = useContext(AuthContext);
    return (
        <div className="font-sans text-gray-nw">
            <div className="container mx-auto lowercase">
                <Router>
                    <Switch>
                        <Redirect exact from="/" to="/home"/>
                        <Route path="/home" component={Home}/>
                        {isAuth === true ? <Redirect exact from="/login" to="/home"/> :
                            <Route path="/login"><Login/></Route>}
                        {isAuth === true ? <Redirect exact from="/sign-up" to="/home"/> :
                            <Route path="/sign-up"><SignUp/></Route>}
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;

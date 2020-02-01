import React from 'react';
import './styles/app.css'
import Header from "./components/Header";
import Main from "./components/Main";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <div className="font-sans text-gray-nw">
            <div className="container mx-auto lowercase">
                <Router>
                    <Header/>
                    <Main/>
                </Router>
            </div>

        </div>
    );
}

export default App;

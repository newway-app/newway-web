import React, {useContext} from "react";
import Nav from "./Nav";
import Question from "./Question";
import Project from "./Project";
import Developer from "./Developer";
import RoadMap from "./RoadMap";
import {Route} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";


const Main = () => {
    const isAuth = useContext(AuthContext);
    return (
        <div>
            <div className="flex mt-10">
                <div className="w-3/12">
                    <Nav/>
                </div>
                <div className="w-6/12">
                    {isAuth ? "true" : "false"}
                    <Route exact path="/home" component={Question}/>
                    <Route path="/home/project" component={Project}/>
                    <Route path="/home/developer" component={Developer}/>
                    <Route path="/home/road-map" component={RoadMap}/>
                </div>
                <div className="w-3/12">
                    .
                </div>
            </div>
        </div>
    );
}

export default Main;
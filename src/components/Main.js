import React, {Component} from "react";
import Nav from "./Nav";
import Question from "./Question";
import Project from "./Project";
import Developer from "./Developer";
import RoadMap from "./RoadMap";
import {BrowserRouter as Route, Switch} from "react-router-dom";


class Main extends Component {

    render() {
        return (
            <div className="flex mt-10">
                <div className="w-3/12">
                    <Nav/>
                </div>
                <div className="w-6/12">
                    <Switch>
                        <Route exact path="/q"><Question/></Route>
                        <Route path="/project"><Project/></Route>
                        <Route path="/developer"><Developer/></Route>
                        <Route path="/road-map"><RoadMap/></Route>
                    </Switch>
                </div>
                <div className="w-3/12">
                    .
                </div>
            </div>
        );
    }
}

export default Main;
import React, {Component, useState} from "react";
import ReactDOM from 'react-dom';
import '../styles/App.css';
import Home from './home';
import About from './about';
import LocationDisplay from './LocationDisplay';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import {browserHistory, IndexRoute} from "react-router";

class App extends Component {
    render() {

        return(
            <div id="main">
               <Router >
                    <nav>
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/about">About</Link>
                        </div>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <Home />
                            <LocationDisplay />
                        </Route>
                        {/* <Redirect from="/home" to="/">
                        </Redirect> */}
                        <Route path="/about">
                            <About />
                            <LocationDisplay />
                        </Route>
                        <Route>
                            <p>No match</p>
                            <LocationDisplay />
                        </Route>
                    </Switch>
               </Router>
               
            </div>
        )
    }
}


export default App;

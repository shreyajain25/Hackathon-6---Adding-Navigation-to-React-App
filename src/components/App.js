import React, {Component, useState} from "react";
import ReactDOM from 'react-dom';
import '../styles/App.css';
// import Home from './home';
// import About from './about';
// import LocationDisplay from './LocationDisplay';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation
  } from "react-router-dom";

import {browserHistory, IndexRoute} from "react-router";

class App extends Component {
    render() {

        return(
            
            <div id="main">
               <Router>
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
                        <Route path="*">
                            <div>No match</div>
                            <LocationDisplay />
                        </Route>
                    </Switch>
               
                </Router>
            </div>
            
        )
    }
}

export const LocationDisplay =({ component: Component, ...rest }) => {
    const location = useLocation();
    return(
        <div data-testid="location-display">
            {location.pathname}
        </div>
    );
}

export class Home extends Component {
    render() {

        return(
            <p>You are home.</p>
        )
    }
}

export class About extends Component {
    render() {

        return(
            <p>You are on the about page.</p>
        )
    }
}


export default App;

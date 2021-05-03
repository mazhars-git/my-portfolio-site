import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home/Home';
import AboutMe from "./component/Home/AboutMe/AboutMe";
import Services from "./component/Home/Services/Services";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <AboutMe />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
        </Switch>
      </Router>
      <Home></Home>
      
    </div>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Home></Home>
      
    </div>
  );
}

export default App;

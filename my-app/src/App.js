
import { BrowserRouter } from 'react-router-dom';
import './App.css';


import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from './Component/main';

class App extends Component {
  // socket  = null
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <BrowserRouter basename={process.env.DOMAIN_PATH}>
        <Switch>
          {/* Front End Routes start*/}
          <Route exact={true} path="/" component={(MainPage)} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;


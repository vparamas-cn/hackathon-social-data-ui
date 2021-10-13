import './App.scss';
import React, { useState } from 'react';
import { Switch, Route,BrowserRouter as Router } from "react-router-dom";
import Home from './Home';
import Vogue from "./Vogue"
import ScrollToTop from './ScrollController';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact children={<Home />} />
        <Route path="/Vogue" children={<Vogue />} />
      </Switch>
    </Router>
  );
}

export default App;

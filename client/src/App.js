import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Landing from './components/Landing'
import Main from './components/Main'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/main" component={Main} />
    </Switch>
  );
}

export default App;

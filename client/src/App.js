import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Main from './components/Main'
import Login from './components/Login'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/main" component={Main} />
    </Switch>
  );
}

export default App;

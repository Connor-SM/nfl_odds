import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './views/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Home />}></Route>
            <Route exact path="/index" render={() => <Home />}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

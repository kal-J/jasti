import React, { Component } from 'react'
import Login from './pages/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    }

  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    );
  }
}



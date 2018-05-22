import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import posed from 'react-pose'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Home from './pantallas/Home'

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home}/>
      </Router>
    );
  }
}

export default App;

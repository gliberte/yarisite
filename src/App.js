import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import styled from 'styled-components'
import posed from 'react-pose'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {injectGlobal} from 'styled-components'
import Home from './pantallas/Home'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Courgette');
`



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

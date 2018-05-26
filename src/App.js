import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import styled from 'styled-components'
import posed from 'react-pose'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import Home from './pantallas/Home'
import Artes from './pantallas/Artes'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Courgette');
body{
  margin:0;
}
`



class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/artes" component={Artes} />
        </React.Fragment>

      </Router>
    );
  }
}

export default App;

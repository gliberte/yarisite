import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import styled from 'styled-components'
import posed from 'react-pose'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import Home from './pantallas/Home'
import Header from './componentes/Header'
import Artes from './pantallas/Artes'
import Fiestas from './pantallas/Fiestas'
import Footer from '../src/componentes/Footer'


injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Courgette');
@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy');
body{
  margin:0;
}
`

const Container = styled.div`
    height:100vh;
    background:#fff000;
    display:grid;
    grid-template-rows:1fr 6fr 1fr;
    grid-template-areas:
    "header header"
    "body body"
    "footer footer"

`

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/artes" component={Artes} />
          <Route path="/fiestas" component={Fiestas}/>
          <Footer/>
        </Container>

      </Router>
    );
  }
}

export default App;

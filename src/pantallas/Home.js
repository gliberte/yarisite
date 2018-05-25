import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Menu from '../componentes/Menu'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import Hero from '../componentes/Hero'
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


export default class Home extends React.Component{
    state = {
        estado:'sale'
    }
    componentDidMount(){
        this.setState({estado:'entra'})
    }
    render(){
        return (
            <Container>
                <Header/>
                <Hero estado={this.state.estado}/>
                <Footer/>
            </Container>
        )
    }
}
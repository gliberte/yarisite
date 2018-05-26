import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Menu from '../componentes/Menu'
import Header from '../componentes/Header'
import Hero from '../componentes/Hero'





export default class Home extends React.Component{
    state = {
        estado:'sale'
    }
    componentDidMount(){
        this.setState({estado:'entra'})
    }
    render(){
        return (
            <React.Fragment>
                <Hero estado={this.state.estado}/>
            </React.Fragment>
        )
    }
}
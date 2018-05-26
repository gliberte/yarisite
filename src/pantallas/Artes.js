import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import arte_fondo from '../img/arte.jpg'
import Hero from '../componentes/HeroGalery'
import Galeria from '../componentes/Galeria'

const Container = styled.div`

`


export default class Artes extends React.Component{
    render(){
        return (
            <Container>
                <Hero url={arte_fondo}>
                    <p>Artes</p>
                </Hero>
                <Galeria origen="artes"/>
            </Container>
        )
    }
}
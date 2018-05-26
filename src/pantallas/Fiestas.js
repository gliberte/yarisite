import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import arte_fondo from '../img/arte.jpg'
import Hero from '../componentes/HeroGalery'
import Galeria from '../componentes/Galeria'
import fondo_galeria from '../img/fondo_galeria.jpg';

const Container = styled.div`
    background:#607D8B;
    grid-area:body;
    
`


export default class Fiestas extends React.Component{
    render(){
        return (
            <Container>
                <Hero url={arte_fondo}>
                    <p>Fiestas</p>
                </Hero>
                <Galeria origen="fiestas" recuadros={50} numimagenes={59}/>
            </Container>
        )
    }
}
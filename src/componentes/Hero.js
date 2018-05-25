import React from 'react'
import styled from 'styled-components'
import fondo from '../img/fondo.jpg'
import SocialIcons from './SocialIcons'

const Container = styled.div`
    grid-area:body;
    background:url(${fondo}) no-repeat;
    background-size:cover;
    background-position:center;
`
const Titulo = styled.h1`
    text-align:center;
    color:#009dde;
    font-size:5em;
    font-family: 'Courgette', cursive;
    text-shadow:4px 4px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px  1px 0 #000,
        1px  1px 0 #000;
`
const Subtitulo = styled.p`
text-align:center;
margin-top:1em;
font-style:italic;
font-size:20px;
`
export default ()=>{
    return (
        <Container>
        <SocialIcons/>
        <Titulo>Hola... soy Yarisbel</Titulo>
        <Subtitulo>Lic. en Diseño Gráfico</Subtitulo>

        </Container>
    )
}
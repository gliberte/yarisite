import React from 'react'
import styled from 'styled-components'
import fondo from '../img/fondo.jpg'
import SocialIcons from './SocialIcons'
import posed from 'react-pose'
import {spring} from 'popmotion'


const Container = styled.div`
    grid-area:body;
    background:url(${fondo}) no-repeat;
    background-size:cover;
    background-position:center;
    text-align:center;
`
const Titulo = styled(posed.h1({
    entra: {
        x: 0,
        scaleY: 1,
        opacity: 1,
        transition:(props)=>spring({
            ...props,
            duration:300
        })
    },
    sale: {
        x: -200,
        scaleY: 0,
        opacity: 0
    }
})) `
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
const Cita = styled(posed.blockquote({
    entra:{
        y:0,
        opacity:1,
        transition:(props)=>spring({
            ...props,
            duration:400,
            delay:0.5
        })
    },
    sale:{
        y:'-45px',
        opacity:0
    }
}))`
    margin:8em auto;
    font-family: 'Amaranth', sans-serif;
    font-family: 'Sacramento', cursive;
    font-size:36px;
    font-weight:bold;
    width:50%;
`
export default ({ estado }) => {
    return (
        <Container>
            <SocialIcons />
            <Titulo pose={estado}>Hola... soy Yarisbel</Titulo>
            <Subtitulo>Lic. en Diseño Gráfico</Subtitulo>
            <Cita pose={estado}>"El diseño crea cultura. La cultura moldea valores, los valores determinan el futuro"</Cita>
        </Container>
    )
}
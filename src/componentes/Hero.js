import React from 'react'
import styled from 'styled-components'
import fondo from '../img/fondo.jpg'

const Container = styled.div`
    grid-area:body;
    background:url(${fondo}) no-repeat;
    background-size:cover;
    background-position:center;
`
export default ()=>{
    return (
        <Container>

        </Container>
    )
}
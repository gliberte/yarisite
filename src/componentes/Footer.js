import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
    grid-area:footer;
    background:black;
`
const Contactos = styled.div`
    display:flex;
    justify-content:space-between;
    color:white;
    padding:0 40px;
    a{
        color:#df4eb5;

    }
`
const Creditos = styled.div`
    
    p{
        color:rgba(255,255,255,0.6);
        font-size:11px;
        text-align:center;
        margin:0;
        font-family: 'Amaranth', sans-serif;
    }
`

export default ()=>{
    return (
        <Container>
            <Contactos>
                <p><a href="mailto:yarisbelmycrist@gmail.com">yarisbelmycrist@gmail.com</a></p>
                <p>Cel.: (507) 67188417</p>
            </Contactos>
            <Creditos>
                <p>Logo</p>
                <p>&copy;2018. Desarrollo: Luis Solano</p>
                <p>Cotacto: <a href="mailto:luis.solano.l@gmail.com">luis.solano.l@gmail.com</a></p>
            </Creditos>
        </Container>
    )
}
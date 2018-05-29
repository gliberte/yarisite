import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin-bottom:2em;
    text-align:center;
`
const BotonSocial = styled.a`
    color:#3f3f3f;
    font-size:20px;
    margin-right:2em;
    margin-top:2em;
    display:inline-block;
    transition:all ease-in-out 0.3s;
    &:hover{
        color:#f13b8a;
    }
    @media (max-width:756px){
        font-size:15px;
    }

`

export default ({estado})=>(
    <Container>
        <BotonSocial href="https://www.facebook.com/mycristdesign" target="_blank"><i className="fa fa-facebook fa-2x"></i></BotonSocial>
        <BotonSocial href="https://www.instagram.com/mycristdesign/" target="_blank"><i className="fa fa-instagram fa-2x"></i></BotonSocial>
        <BotonSocial href="https://www.linkedin.com/in/yarisbel-cerrud-b78873146/" target="_blank"><i className="fa fa-linkedin fa-2x"></i></BotonSocial>
    </Container>
)
import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
    height:300px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:${props => `url(${props.url}) no-repeat`};
    background-size:cover;
    background-position:center;
    font-family: 'Luckiest Guy', cursive;
    
    p{
        font-size:50px;
        margin-left:30px;
    }
`

export default ({url,children})=>{
    return (
        <Hero url={url}>
            {children}
        </Hero>
    )
}
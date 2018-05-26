import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
    height:400px;
    display:flex;
    align-items:center;
    background:${props => `url(${props.url}) no-repeat`};
    background-size:cover;
    background-position:center;
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
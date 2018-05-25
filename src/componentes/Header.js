import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
const ContainerHeader = styled.div`
    grid-area:header;
    background:black;
    display:grid;
    grid-template-columns:1fr 2fr;
    grid-column-gap:10px;

`
const Logo = styled.div`
    font-size:30px;
    height:100%;
    background:gray;
    line-height:100%;
    text-align:center;
    display:grid;
    align-items:center;
    color:white;
`

export default ()=>{
    return (
        <ContainerHeader>
            <Logo><span>Logo</span></Logo>
            <Menu/>
        </ContainerHeader>
    )
}
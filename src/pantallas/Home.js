import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Menu from '../componentes/Menu'
const Container = styled.div`
    height:100vh;
    background:#fff000;
`

export default class Home extends React.Component{
    render(){
        return (
            <Container>
                <Menu/>
            </Container>
        )
    }
}
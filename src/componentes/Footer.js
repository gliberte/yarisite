import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
    grid-area:footer;
    background:black;
`

export default ()=>{
    return (
        <Container>
            Footer
        </Container>
    )
}
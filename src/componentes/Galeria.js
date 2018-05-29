import React from 'react'
import styled from 'styled-components'
import img1 from '../img/artes/1.jpg'
const Container = styled.div`
    width:auto;

`

const Overlay = styled.div`
    position:fixed;
    background:rgba(0,0,0,0.7);
    top:0;
    right:0;
    bottom:0;
    left:0;
    ${props => props.arte ? `
    display:grid;
    align-items:center;
    justify-content:center;
    `:`
    display:none;
    `}
    z-index:2;
`
const OverlayInner = styled.div`
    background:white;
    width:700px;
    padding:20px;
    img{
        width:100%;
    }
`
const Close = styled.button`
    background:none;
    color:black;
    border:0;
    &:hover{
        cursor:pointer;
    }

`

const MainContent = styled.section`
    display:grid;
    width:90%;
    justify-content:center;
    margin:10px auto;
    background:rgba(0,0,0,0.7);
    border:4px solid #ac2e66; 
    grid-template-columns:repeat(auto-fill,300px);
    grid-auto-rows:300px;
    grid-auto-flow:dense;
`

//grid-row: span ${props => props.digits.v};
//grid-column:span ${props => props.digits.h};
const Imagenes = styled.div`
    overflow:hidden;
    display:grid;
    grid-template-columns:1;
    grid-template-rows:1;
    
    img{
        grid-column:1/-1;
        grid-row:1/-1;
        width:100%;
        height:100%;
        object-fit:cover;
        border:1px solid;

    }
    &:hover div{
        transform:translateY(0);
    }
    
`
const ItemOverlay = styled.div`
    background:#ffc60032;
    grid-column:1/-1;
    grid-row:1/-1;
    position:relative;
    display:grid;
    justify-content:center;
    align-items:center;
    transform:translateY(100%);
    transition:0.2s;
    button{
        background:none;
        border:2px solid white;
        color:white;
        text-transform:uppercase;
        background:rgba(0,0,0,0.7);
        padding:5px;
        &:hover{
            cursor:pointer;
        }
        
    }
    
`

export default class Galeria extends React.Component {
    state = {
        digits: [],
        arte:null
    }
    componentDidMount() {
        // const digits = Array.from({ length: this.props.recuadros }, () => {
        //     return [randomNumber(4), randomNumber(4)].concat(
        //         [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        //         [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        //         [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]
        //     )
        // })
        // this.setState({ digits })
        const digits  = Array.from({length:this.props.numimagenes},(v,i)=>{
            return i+1
        })
        console.log(digits)
        this.setState({digits})

    }

    render() {
        return (
            <Container>
                <Overlay arte={this.state.arte}>
                    <OverlayInner>
                        <Close onClick={()=>this.setState({arte:null})}>
                            <i className="fa fa-close"></i>
                            Cerrar
                        </Close>
                        <img src={this.state.arte} alt="" />
                    </OverlayInner>
                </Overlay>
                <MainContent>
                    {this.state.digits.map((digit) => {
                        //const [h, v] = [digit[0], digit[1]]
                        const arte = require(`../img/${this.props.origen}/${digit}.jpg`)
                        return (
                            <Imagenes key={digit} >
                                <img src={arte} alt=""/>
                                <ItemOverlay>
                                    <button onClick={()=>this.setState({arte})}>Ver -></button>
                                </ItemOverlay>
                            </Imagenes>
                        )

                    })}

                </MainContent>
            </Container>
        )
    }

}

function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1
}
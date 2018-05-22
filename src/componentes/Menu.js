import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

const sidebarConfig = {
    initialPose: 'closed',
    open: {
        x: '0%',
        delayChildren: 500,
        staggerChildren: 70
    },
    closed: {
        x: '-100%',
        delay: 1000,
        staggerChildren: 40,

    }
}
const itemConfig = {
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
}

const Sidebar = styled(posed.ul(sidebarConfig)) `
  width: 300px;
  height: 100vh;
  background: transparent;
  padding: 30px;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content:center;

  margin: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  `
const Item = styled(posed.li(itemConfig)) `
  background: #43415F;
    border-radius: 5px;
    height: 130px;
    width: 100%;
    opacity: 0;
    margin-bottom: 50px;
    transform-origin-y: 0%;
    color: white;
    line-height:130px;
    text-align:center;
    font-size:1.3em;
    transition:all ease-in-out 0.4s;
    &:hover{
        background:white;
        color:black;
        margin-left:20px;
    }
    
  `
export default class Menu extends React.Component {
    state = {
        menu:'closed'
    }
    componentDidMount(){
        this.setState({
            menu:'open'
        })
    }
    render() {
        return (
            <Sidebar pose={this.state.menu}>
                <Item>Artes Gráficas</Item>
                <Item>Manualidades y Creatividad</Item>
                <Item>Accesorios y Más</Item>
                <Item>Catálogos</Item>
            </Sidebar>
        )
    }


}
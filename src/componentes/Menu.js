import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import {spring,tween,easing} from 'popmotion'
import {Link} from 'react-router-dom'

const sidebarConfig = {
    initialPose: 'closed',
    open: {
        x: '0%',
        delayChildren: 500,
        staggerChildren: 70,
    },
    closed: {
        x: '-100%',
        delay: 1000,
        staggerChildren: 40

    }
}
const itemConfig = {
    open: { 
        y: 0, 
        opacity: 1,
        transition:(props)=>tween({
            ...props,
            duration:600,
            ease:easing.anticipate
        })
    },
    closed: { 
        y: 20, 
        opacity: 0
     }
}
const subItemConfig = {
    visible: { 
        y: '0%', 
        opacity: 1,
        transition:(props)=>tween({
            ...props,
            duration:600,
            ease:easing.anticipate
        })
    },
    notvisible: { 
        y: '-100%', 
        opacity: 0
     }
}
const Submenu = styled(posed.ul({
    initialPose: 'closed',
    visible: {
        y: '0%',
        opacity:1,
        delayChildren: 500,
        staggerChildren: 70,
    },
    notvisible: {
        y: '-100%',
        opacity:0,
        delay: 600,
        staggerChildren: 40

    }
}))`
        position:absolute;
        top:110px;
        background:#f03a83;
        left:-3px;
        padding:2em;
        list-style:none;
        border-radius:10px;


`

const SubItem = styled(posed.li(subItemConfig))`
    margin:12px;
    font-size:20px;
    a{
        text-decoration:none;
        color:white;
        transition:all 0.2s linear;
    }
    a:hover{
        color:#feed3d;
    }


`
const UL = styled(posed.ul(sidebarConfig)) `
    margin:0;
    padding:0;
    
    justify-self:end;
    display:flex;
    align-items:center;
   
    
    >li{
        list-style:none;
        display:inline-block;
        background:#f03a83;
        color:white;
        padding:30px;
        transition:all ease-in-out 0.2s;
        
    }
    >li:hover{
        background:#feed3d;
        color:black;
    }
   

    >li:first-child{
        margin-right:1em;
    }
   


 
  `
const Item = styled(posed.li(itemConfig)) `
    
    
    position:relative;
    &:hover{
        cursor:pointer;
    }
    
  `
  
export default class Menu extends React.Component {
    state = {
        menu:'closed',
        submenu:'notvisible',
        submenu2:'notvisible'
    }
    componentDidMount(){
        this.setState({
            menu:'open'
        })
    }
    render() {
        return (
            <UL pose={this.state.menu}>
                <Item 
                onMouseEnter={()=>this.setState({submenu:'visible'})}
                onMouseLeave={()=>this.setState({submenu:'notvisible'})}
                >
                    Artes Gráficas
                    <Submenu pose={this.state.submenu}>
                        <SubItem><Link to="/galeria/artes">Artes</Link></SubItem>
                        <SubItem><Link to="#">Catalogo</Link></SubItem>
                    </Submenu>
                </Item>
                <Item
                onMouseEnter={()=>this.setState({submenu2:'visible'})}
                onMouseLeave={()=>this.setState({submenu2:'notvisible'})}
                >
                    Manualidades y Creatividad
                    <Submenu pose={this.state.submenu2}>
                        <SubItem><Link to="/galeria/fiestas">Fiestas</Link></SubItem>
                        <SubItem><Link to="/galeria/accesorios">Accesorios</Link></SubItem>
                        <SubItem><Link to="/galeria/recordatorios">Recordatorios</Link></SubItem>
                        <SubItem><Link to="#">Pintura</Link></SubItem>
                        
                    </Submenu>
                    </Item>
            </UL>
        )
    }


}
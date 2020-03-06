import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const FixedNav = styled.nav`
    background:#f5f5f5
    height:36pt;
    position:fixed;
    width:calc(100% - 24pt);
    right:12pt;
    bottom:12pt;
    border-radius:18pt;
    overflow:hidden;
    box-sizing:border-box;
    display:grid;
    grid-template-columns:1fr 1fr;
    box-shadow:0 9px 16px rgba(0,0,0,.18);
    z-index:100;

    & .navLink {
        color:black;
        font-size:18pt;
        text-align:center;
        text-decoration:none;
        height:100%;
        margin:0;
        font-size:9pt;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    & .active {
        background:#ff4757;
        color:white;        
    }
`

export const FixedNavBar = props => {
    return(
        <FixedNav>
            <NavLink exact className='navLink' to='/'><i className="material-icons">home</i></NavLink>
            <NavLink className='navLink' to='/recording'><i className='material-icons'>mic</i></NavLink>
            
            {/*Temporarily Removed*/}
            
            {/* <NavLink className='navLink' to='/addFood'><i className='material-icons'>fastfood</i></NavLink>
            <NavLink className='navLink' to='/addContext'><i className='material-icons'>chrome_reader_mode</i></NavLink> */}
        </FixedNav>
    )
}
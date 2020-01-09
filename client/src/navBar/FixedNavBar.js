import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const FixedNav = styled.nav`
    background:pink;
    height:32pt;
    position:fixed;
    width:100vw;
    bottom:0;
    right:0;
    box-sizing:border-box;
    display:grid;
    grid-template-columns:1fr 1fr 1fr

    & .navLink {
        color:black;
        font-size:18pt;
        text-align:center;
        text-decoration:none;
        height:100%;
        margin:0;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
    }

    & .active {
        background:red
    }
`

export const FixedNavBar = props => {
    return(
        <FixedNav>
            <NavLink exact className='navLink' to='/'>Home</NavLink>
            <NavLink className='navLink' to='/addFood'>Food</NavLink>
            <NavLink className='navLink' to='/addContext'>Context</NavLink>
        </FixedNav>
    )
}
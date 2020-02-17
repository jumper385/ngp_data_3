import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { animated, useSpring } from 'react-spring'

export const ButtonRowContainer = styled.div`
    display:inline-flex;
    align-items:center;
    justify-content:space-between;
    margin-top:24pt;
    padding:0 9pt;
    width:100%;
    box-sizing:border-box;
`

export const SubmitButton = styled.input`
    border:none;
    font-size:9pt;
    text-transform:uppercase;
    font-weight:bold;
    background: linear-gradient(90deg, #241034 0%, #1C0638 100%);
    color:white;
    padding:9pt 36pt;
    border-radius:100vh;
    text-align:center;
    display:inline-block;
    box-shadow: 0 0 9pt rgba(0,0,0,.12)
`

export const BubbleButton = styled.button`
    border:none;
    font-size:9pt;
    text-transform:uppercase;
    font-weight:bold;
    color:rgba(0,0,0,.24);
    padding:9pt 36pt;
    text-align:center;
    display:inline-block;
    box-shadow: 0 0 9pt rgba(0,0,0,.12)
`


export const FlatLink = styled(Link)`
    font-weight:bold;
    text-transform:uppercase;
    text-decoration:none;
    font-size: 9pt;
    color:rgba(0,0,0,.24);
`

const ToggleSwitchContainer = styled.div`
    border:1px solid rgba(0,0,0,.09);
    display:inline-block;
    position:relative;
    height:${props => props.height ? `${props.height}pt` : '24pt'};
    width:${props => props.height ? `${props.height * 2}pt` : '48pt'};
    border-radius:24pt;
    overflow:hidden;
    user-select:none;
    -webkit-tap-highlight-color:transparent;

    .switch {
        background:#1C0638;
        color:white;
        display:flex;
        position:absolute;
        height:${props => props.height ? `${props.height - 6}pt` : '18pt'};
        width:${props => props.height ? `${props.height - 6}pt` : '18pt'};
        top:3pt;
        border-radius:48pt;
        align-items:center;
        justify-content:center;
        right:3pt;
        box-shadow:0 0 9pt rgba(0,0,0,.12);

        span {
            margin:0;
            padding:0;
            :first-child {
                margin:0; 
                paddding:0;
                display:flex;
                align-items:center;
                justify-content:center;
            }
        }

    }
`

export const ToggleSwitch = props => {

    let [state, setState] = useState(true)

    const switchSlide = useSpring({
        right:state ? `3pt` : `${props.height+3 || 24+3}pt`,
        from:{right: !state ? `3pt` : `${props.height+3 || 24+3}pt` },
        config:{tension:1500, mass:0.5, friction:30}
    })

    return (
        <ToggleSwitchContainer height={props.height} onClick={() => {setState(state ? false : true)}}>
            <animated.div className='switch' style={switchSlide} >
                <span><FontAwesomeIcon icon={faSun} /></span>
            </animated.div>
        </ToggleSwitchContainer>
    )
}
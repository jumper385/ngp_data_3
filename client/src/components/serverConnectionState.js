import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:3000')

const IndicatorDiv = styled.div`
    position:absolute;
    height:32pt;
    background:rgb(245,245,245);
    border-radius:6pt;
    box-shadow: 
        -4.5px -4.5px 8px white,
        4.5px 4.5px 8px #a3b1c6;
    color:black;
    display:flex;
    align-items:center;
    padding:0 16pt;
    box-sizing:border-box;
    top:12pt; left:12pt;

    & .Indicator{
        width:8pt;
        height:8pt;
        border-radius:8pt;
        background:${props => () => {
            console.log(props.status)
            switch(props.status){
                case 'success':
                    return `#2ecc71`
                case 'error':
                    return `#e74c3c`
                case 'standby':
                    return `#f1c40f`
                default:
                    return '#bdc3c7'
        }}};
    }

`

export const ServerIndicator = props => {

    let [state, setState] = useState({})

    return(
        <IndicatorDiv status={state.status}>
            <div className='Indicator'/>
        </IndicatorDiv>
    )

}
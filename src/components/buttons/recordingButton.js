import React, {useState} from 'react'
import styled from 'styled-components'

export const RecordButtonPrimative = props => {
    let [ state, setState ] = useState({recording:false})

    const onClick = e => {

        if(props){
            if(props.onClick){
                props.onClick()
            }
        }

        setState({recording: state.recording ? false : true})
    }

    const StyledButton = styled.div`
        height:64pt;
        width:64pt;
        border-radius:50%;
        background:pink;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        margin:0;
        padding:0
        box-sizing:border-box;
        margin:0 auto;
        user-select:none;
    `

    return (
        <StyledButton onClick={onClick}>{state.recording ?'stop':'start'}</StyledButton>
    )
    
}
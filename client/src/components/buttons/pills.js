import React from 'react'
import styled from 'styled-components'

export const ValuedPillPrimative = props => {

    const StyledButtonContainer = styled.div`
        background:pink;
        display:inline-block;
        padding:0 12pt;
        cursor:pointer;
        user-select:none;
    `
    
    const onClick = e => {
        if(props){
            if(props.onClick){
                props.onClick()
            }
        }
    }

    return (<StyledButtonContainer onClick={onClick}>{props.text}</StyledButtonContainer>)
}
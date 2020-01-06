import React from 'react'
import styled from 'styled-components'

const StyledInputButton = styled.input`
    width:100%;
    height:36pt;
    border:none;
    border-radius:6pt;
    background:pink;
    text-transform:uppercase;
    font-weight:600;
` 

export const InputSubmitButtonPrimative = props => {
    return(
        <StyledInputButton type='submit' />
    )
} 
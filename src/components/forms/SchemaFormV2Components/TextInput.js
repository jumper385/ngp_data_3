import React from 'react'
import styled from 'styled-components'
import { StyledInputComponent } from './InputBase'

const StyledTextInput = styled.input`
    -webkit-appearance: none;
    margin:6pt 0;
    padding:6pt;
    box-sizing:border-box;
    border-radius:6pt;
    border: 1pt solid #ecf0f1;
    font-size:12pt;
    color:rgba(0,0,0,.84);
    box-shadow: 0 0pt 2px #ecf0f1, inset 0 0pt 2px #ecf0f1;
    width:100%;
`

export const TextInput = props => {
    return(
        <StyledInputComponent>
            <p className='inputLabel'>{props.label}</p>
            <StyledTextInput 
                type='text' 
                value={props ? props.value || '' : ''}
                onChange={props.onChange}
                name={props.name}
                placeholder={props.name}
            />
            {props.hint ? <p className='inputHint'>{props.hint}</p> : null}
        </StyledInputComponent>
    )
}
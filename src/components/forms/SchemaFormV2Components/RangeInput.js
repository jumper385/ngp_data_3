import React from 'react'
import { StyledInputComponent } from './InputBase'
import styled from 'styled-components'

const StyledRangeInput = styled.input`
    width:100%;
    -webkit-appearance: none;
    margin: 12pt 0;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        border:none;
        height:12pt;
        width:12pt;
        border-radius:6pt;
        background:#2ecc71;
        margin-top:-5pt;
    }

    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        border:none;
        height:2pt;
        background:rgba(0,0,0,.09);
        border-radius:1pt;
    }
`

export const RangeInput = props => {
    return(
        <StyledInputComponent>
            <p className='inputLabel'>{props.label} - {props ? props.value || 'No Rating Yet...': 'No Rating...'}</p>
            <StyledRangeInput
                type='range' 
                value={props.value} 
                onChange={props.onChange}
                name={props.name}
                min={props.min}
                max={props.max}
            />
            {props.hint ? <p className='inputHint'>{props.hint}</p> : null}
        </StyledInputComponent>
    )
}
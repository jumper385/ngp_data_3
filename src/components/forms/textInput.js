import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
        width:100%;
        position:relative;
        display:inline-block;
        height:56pt;
        box-sizing:border-box;
        margin:0;
        padding:0;
        margin-top:6pt;

        & .InputLabel {
            font-size:9pt;
            position:absolute;
            top:0;
            z-index:1;
            margin:0;
            padding:0;
            left:12pt;
            padding:0 3pt;
            box-sizing:border-box;
            background:white;
            color:rgba(0,0,0,.18);
            text-transform:uppercase;
            font-weight:900;
        }

        & .InputField {
            position:absolute;
            width:100%;
            top:4.5pt;
            height:36pt;
            background:none;
            border:1pt solid rgba(0,0,0,.18);
            border-radius:6pt;
            padding:0 15pt;
            font-size:12pt;
            box-sizing:border-box;
        }

        & .InputHint {
            position:absolute;
            font-size:9pt;
            bottom:0;
            left:15pt;
            margin:0
            color:rgba(0,0,0,.24)
        }
    `

export const TextInputPrimative = props => {
    return (
        <InputContainer>
            <p className='InputLabel'>{props.label}</p>
            <input value={props.value} className='InputField' name={props.name} type='text' onChange={e => props.onChange(e)}/>
            {props.hint ? <p className='InputHint'>Hint: {props.hint}</p> : null}
        </InputContainer>
    )
}
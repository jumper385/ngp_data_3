import React, {useState} from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
        width:100%;
        position:relative;
        display:inline-block;
        height:56pt;
        padding:0;
        margin:0;
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
            bottom:0;
            height:100%;
            background:none;
            font-size:12pt;
            box-sizing:border-box;

            & ::-webkit-slider-track {
                -webkit-appearance: none;
                background:pink;
            }

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

    const StyledInput = styled.input`
        -webkit-appearance: none;
        box-sizing:border-box;
        padding:0 15pt;

        ::-webkit-slider-runnable-track{
            -webkit-appearance: none;
            height:1pt;
            background:rgba(0,0,0,.18);
            box-sizing:border-box;
        }
        ::-webkit-slider-thumb {
            -webkit-appearance: none;
            border:none;
            background:pink;
            height:12pt;
            width:12pt;
            border-radius:50%;
            margin-top:-5pt;
            box-sizing:border-box;
        }
    `
    const GuidedSlider = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:36pt;
        position:absolute;
        width:100%;
        top:4.5pt;

        p {
            margin:0;
        }
    `

export const RangeInputPrimative = props => {

    let [state, setState] = useState()

    const onChange = e => {
        setState(e.target.value)
        if(props && props.onChange){
            props.onChange(e)
        }
    }

    return (
        <InputContainer>
            <p className='InputLabel'>{props.label} - {state || 'Please add a Rating'}</p>
            <GuidedSlider>
                <p>{props.min}</p>
                <StyledInput className='InputField' value={props.value} name={props.name} onChange={onChange} type='range' min={props.min} max={props.max} />
                <p>{props.max}</p>
            </GuidedSlider>
            {props.hint ? <p className='InputHint'>Hint: {props.hint}</p> : null}
        </InputContainer>
    )
}
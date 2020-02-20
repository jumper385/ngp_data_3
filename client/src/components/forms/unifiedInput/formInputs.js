import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.div`

    width:100%;
    font-size:9pt;
    margin-top:18pt;
    -webkit-appearance: none;
    appearance: none;
    background:none;
    border:none;

    :first-of-type{
        margin:none;
    }

    input, select {
        -webkit-appearance: none;
        appearance: none;
        border:none;
        background:none;
        box-shadow:none;
        display:flex;
        align-items:center;
        height:24pt;
        width:100%;
        border-radius:9pt;
        padding: 0 9pt;
        box-sizing:border-box;
        border:solid 0.5px rgba(0,0,0,.12);

        ::placeholder{
            color:rgba(0,0,0,.12)
        }
    }

    .range {

        border:none;
        
        ::-webkit-slider-runnable-track{
            -webkit-appearance: none;
            height:2px;
            border-radius:1px;
            background:rgba(0,0,0,.24);
            box-sizing:border-box;
        }

        ::-webkit-slider-thumb {
            -webkit-appearance: none;
            border:none;
            background:linear-gradient(90deg, #241034 0%, #1C0638 100%);;
            height:12pt;
            width:12pt;
            border-radius:50%;
            margin-top:-5pt;
            box-sizing:border-box;
        }

    }

    .label {
        margin-bottom:6pt;
        padding-left:9pt;
        text-transform:uppercase;

        span {
            color:red;
        }
    }

    .hint {
        padding-left: 9pt;
        color:rgba(0,0,0,.24);
        font-size:7pt;
    }

`

const VariableInputField = React.forwardRef((props, ref) => {

    let { extras, type, ...configs} = props

    switch (props.type) {

        case 'select':
            return (
                <select ref={ref} {...configs} >
                    {props.extras.options.map((object, index) => {
                        return <option key={index} {...object}>{object.label}</option>
                    })}
                </select>
            )

        case 'range':
            return (
                <div style={{display:'flex', alignItems:'center', padding:'0 9pt', boxSizing:'border-box'}}>
                    <p>{configs.min}</p>
                    <input className='range' ref={ref} {...props} />
                    <p>{configs.max}</p>
                </div>
            )

        default:
            return <input ref={ref} {...props} />

    }
})

export const TextInput = props => {

    const { ref, ...inputConfig } = props.styling

    return (
        <StyledInput>
            <label to={props.name}>
    <p className='label'>{props.label} {props.error[inputConfig.name] && <span>~ {`${props.error[inputConfig.name].type}`}</span>} {props.value && `- ${props.value}`}</p>
            </label>
            <VariableInputField ref={ref} {...inputConfig} />
            {props.hint && <p className='hint'>{props.hint}</p>}
        </StyledInput>
    )
}

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

export const FormButtonContainer = styled.div`
    display:flex;
    justify-content:center;
`
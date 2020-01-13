import React, { useState, useEffect } from 'react'
import { TextInput } from '../forms/SchemaFormV2Components/TextInput'
import { RangeInput } from '../forms/SchemaFormV2Components/RangeInput'
import { StyledFormSubmit } from './SchemaFormV2Components/StyledFormSubmit'
import { StyledForm } from './SchemaFormV2Components/StyledForm'
import { NumberInput } from '../forms/SchemaFormV2Components/NumberInput'
import { DatetimeInput } from './SchemaFormV2Components/DateTimeInput'

const Input = props => {

    let [state, setState] = useState({})

    useEffect(() => {
        if(props.resetForm == true){
            setState({...state, payload:{}, readyToReset:false})
        }
        if(state.readyToChange && props.onChange){
            props.onChange(state.payload)
            setState({...state, readyToChange:false})
        }
    })

    const onChange = e => {
        const payload = {[e.target.name]:e.target.value}
        setState({...state, ...{payload:payload}, readyToChange:true})
    }
    
    switch(props.type){
        case 'text':
            return(<TextInput 
                label={props.label} 
                type={props.type} 
                name={props.name} 
                value={state.payload ? state.payload[props.name] || '' : ''} 
                onChange={onChange}
                hint={props.hint}
            />)
        case 'range':
            return(<RangeInput 
                label={props.label} 
                type={props.type} 
                name={props.name} 
                value={state.payload ? state.payload[props.name] || '' : ''} 
                onChange={onChange}
                min={props.min}
                max={props.max}
                hint={props.hint}
            />)
        case 'number':
            return(<NumberInput 
                label={props.label} 
                type={props.type} 
                name={props.name} 
                value={state.payload ? state.payload[props.name] || '' : ''} 
                onChange={onChange}
                min={props.min}
                max={props.max}
                hint={props.hint}
            />)
        case 'time':
            return(<DatetimeInput 
                label={props.label} 
                type={props.type} 
                name={props.name} 
                value={state.payload ? state.payload[props.name] || '' : ''} 
                onChange={onChange}
                hint={props.hint}
            />)
        default:
            return(<TextInput 
                label={props.label} 
                type={props.type} 
                name={props.name} 
                value={state.payload ? state.payload[props.name] || '' : ''} 
                onChange={onChange}
            />)
    }
}

export const SchemaFormV2 = props => {

    let [state, setState] = useState({})

    let schema = props.schema || []

    useEffect(() => {
        if(state.readyToSubmit === true){
            if(props.onReadyForm){
                props.onReadyForm(state.payload)
            }
            setState({...state, readyToSubmit:false})
            resetForm()
        }
        if(state.readyToChange === true){
            setState({...state, readyToChange:false})
        }
        if(state.readyToReset === true){
            setState({...state, readyToReset:false})
        }
    })

    const onSubmit = e => {
        e.preventDefault()
        setState({...state, readyToSubmit:true})
    }

    const onChange = e => {
        let newPayload = {...state.payload, ...e}
        setState({...state, payload:newPayload, readyToChange:true})
    }

    const resetForm = e => {
        setState({readyToReset:true})
    }

    return(
        <div>
            <StyledForm onSubmit={onSubmit}>
                {schema.map((obj, index) => {
                    return <Input {...obj} onChange={onChange} key={index} resetForm={state.readyToReset}/>
                })}
                <StyledFormSubmit disabled={state.payload ? false : true} type='submit'/>
            </StyledForm>
        </div>
    )
}
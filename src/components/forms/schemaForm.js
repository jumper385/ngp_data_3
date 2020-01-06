import React, {useState, useEffect} from 'react'
import { TextInput, RangeInput } from '../inputs';
import { InputSubmitButton } from '../buttons';

export const SchemaForm = props => {

    let [state, setState] = useState({})

    let schema = props.schema || []

    useEffect( () => {

        if(state.readyToSubmit == true){
            if(props.onSubmit){
                props.onSubmit(state)
            }
            setState({})
        }

        if(state.readyToChange == true){
            if(props.onChange){
                props.onChange(state)
                setState({...state, readyToChange:false})
            }
        }

    } )

    let onChange = e => {
        setState({...state, [e.target.name]:e.target.value, readyToChange:true})
    }

    let onSubmit = e => {
        e.preventDefault()
        if(props && props.onSubmit) {setState({...state, readyToSubmit:true})}
    }

    return (
        <form onSubmit={onSubmit}>
            {schema.map((item,index) => {
                if(item.type === 'text'){
                    return <TextInput value={state ? state[item.name] || '' : ''} {...item} key={index} onChange={onChange}/>
                } else if (item.type === 'range'){
                    return <RangeInput value={state ? state[item.name] || '' : ''} {...item} key={index} onChange={onChange}/>
                } else {
                    return <TextInput value={state ? state[item.name] || '' : ''} {...item} key={index} onChange={onChange}/>
                }
            })}
            <InputSubmitButton />
        </form>
    )

}
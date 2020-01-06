import React, { useState, useEffect } from 'react'
import { SchemaForm } from '../components/forms/schemaForm'

const Food = props => {

    let [state, setState] = useState({})

    useEffect(() => {

        if(props.onSubmit && state.readyToSubmit===true){
            props.onSubmit(state)
            setState({readyToSubmit:false})
        }
        if(props.onChange && state.readyToChange==true){
            props.onChange(state)
            setState({...state, readyToChange:false})
        }

    })

    const onSubmit = e => {
        setState({...state, readyToSubmit:true})
    }

    const onChange = e => {
        setState({...state, ...e, readyToChange:true})
    }

    return(
        <div>
            <SchemaForm schema={[
                {type:'text',name:'foodName',label:'Food Name'},
                {type:'text',name:'components',label:'Food Components',hint:'e.g. Nuts, Pepper, Oil, Wheat'},
            ]} onSubmit={onSubmit} onChange={onChange}/>
        </div>
    )
}

export default Food
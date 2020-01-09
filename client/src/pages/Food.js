import React, { useState, useEffect } from 'react'
import { SchemaFormV2 } from '../components/forms/SchemaFormV2'

const Food = props => {

    let [state, setState] = useState({})

    useEffect(() => {

        if(props.onSubmit && state.readyToSubmit===true){
            props.onSubmit(state.food)
            setState({readyToSubmit:false})
        }

    })

    const onSubmit = e => {
        if(e){
            let newPayload = {...e, timestamp:new Date()}
            setState({...state, food:newPayload, readyToSubmit:true})
        }
    }

    return(
        <div>
            <SchemaFormV2 schema={[
                {type:'text',name:'foodName',label:'Food Name'},
                {type:'text',name:'components',label:'Food Components',hint:'e.g. Nuts, Pepper, Oil, Wheat'},
            ]} onReadyForm={onSubmit}/>
        </div>
    )
}

export default Food
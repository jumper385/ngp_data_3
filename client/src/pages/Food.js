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
            let newPayload = {...e}
            setState({...state, food:newPayload, readyToSubmit:true})
        }
    }

    return(
        <div>
            <h1 style={{textAlign:'center', color:'rgba(0,0,0,.86)'}}>Add Food</h1>
            <SchemaFormV2 schema={[
                {type:'text',name:'foodName',label:'Food Name'},
                {type:'datetime-local',name:'timestamp',label:'Consumption Time',hint:'What time did you have it?'},
                {type:'text',name:'components',label:'Food Components',hint:'e.g. Nuts, Pepper, Oil, Wheat'},
            ]} onReadyForm={onSubmit}/>
        </div>
    )
}

export default Food
import React, {useState} from 'react'
import { SchemaFormV3 } from '../components/forms/SchemaFormV3/SchemaFormV3'

export const Test = props => {

    let [state, setState] = useState({})

    const onSubmit = e => setState(e)

    return(
        <div>
            <SchemaFormV3 
                schema={[
                    {
                        name:'foodName',
                        label:'Food Name',
                        configs:{type:'text'},
                        register:{required:true}
                    },
                    {
                        name:'fodmapType',
                        label:'Fodmap Type',
                        configs:{type:'select', options:[null,'fructose','lactose','fructans','mannitol','sorbital','galactan']}
                    },
                    {
                        name:'components',
                        label:'Food Components',
                        configs:{type:'text'}
                    },
                    {
                        name:'timestamp',
                        label:'Consumption Time',
                        configs:{type:'datetime-local'}
                    },
                    {
                        name:'notes',
                        label:'Notes',
                        configs:{type:'text'}
                    },
                ]}
                onReadyForm={onSubmit} 
            />
            <pre>
                {JSON.stringify(state, null, 2)}
            </pre>
        </div>
    )
}
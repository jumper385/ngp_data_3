import React from 'react'
import { SchemaFormV2 } from '../components/forms/SchemaFormV2'

const Schema = [
    {type:'range', label:'Bristol Poop Rating', name:'poop', min:1, max:7},
    {type:'range', label:'Poop Size', name:'poopSize', min:0, max:10},
    {type:'range', label:'Stress Level', name:'stress', min:0, max:10},
    {type:'range', label:'Sleep (hrs)', name:'sleep', min:0, max:24},
    {type:'range', label:'Energy Rating', name:'energy', min:0, max:10},
    {type:'text', label:'Notes', name:'notes'}
]

const Context = props => {
    return(
        <div>
            <h1 style={{textAlign:'center', color:'rgba(0,0,0,.86)'}}>Add Context</h1>
            <SchemaFormV2 
                schema={Schema}
                onReadyForm={props.onSubmit}
            />
        </div>
    )
}

export default Context
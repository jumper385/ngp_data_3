import React, {useState, useEffect} from 'react'
import { SchemaFormV2 } from '../components/forms/SchemaFormV2'
import { RecordingButton } from '../components/buttons/RecordingButtonV2'
import { connect } from 'react-redux'

const RatingSchema = [
    {type:'range', label:'Overall', name:'overall', min:0, max:10},
    {type:'range', label:'Abdominal Pain', name:'abdPain', min:0, max:10},
    {type:'range', label:'Bloating', name:'bloating', min:0, max:10},
    {type:'range', label:'Wind', name:'wind', min:0, max:10},
]

const RecordingNumberSchema = [
    {type:'number', label:'Hardware Recording Number', name:'hardwareRecordingNumber'}
]

const SymptomSchema = {
    pain:[
        {type:'range', label:'Severity', name:'severity', min:0, max:10},
        {type:'text', label:'Location', name:'location'},
        {type:'text', label:'Notes', name:'notes'},
    ],
    bloating:[
        {type:'range', label:'Severity', name:'severity', min:0, max:10},
        {type:'text', label:'Location', name:'location'},
        {type:'text', label:'Notes', name:'notes'},
    ],
    constipation:[
        {type:'range', label:'Severity', name:'severity', min:0, max:10},
        {type:'text', label:'Notes', name:'notes'},
    ],
    custom:[
        {type:'text', label:'Symptom', name:'symptom'},
        {type:'range', label:'Severity', name:'severity', min:0, max:10},
        {type:'text', label:'Location', name:'location'},
        {type:'text', label:'Notes', name:'notes'},
    ],
}

const Recording = props => {
    console.log(props)
    return (
        <div>
            Recording Page
            {props.isReadyToRecord ? 
                <RecordingButton onClick={props.CHANGE_RECORDING_STATE}>{
                    props.isRecording ? 'pause' : 'play'
                }</RecordingButton> :
                <SchemaFormV2 onReadyForm={props.ADD_HARDWARE_RECORDING_NUMBER} schema={RecordingNumberSchema}/>
            }
            <div>{props.isRecording ? 
                <div>
                    <p>Simple Symptoms</p>
                    <button onClick={e => props.ADD_SYMPTOM({symptom:'burp'})}>burp</button>
                    <button onClick={e => props.ADD_SYMPTOM({symptom:'fart'})}>fart</button>
                    <button onClick={e => props.ADD_SYMPTOM({symptom:'gurgle'})}>gurgle</button>
                    <button onClick={e => props.ADD_SYMPTOM({symptom:'urge to poo'})}>urge to poo</button>
                </div> : 
                props.isReadyToRecord ? 
                'not recording' :
                null
            }</div>
            <button onClick={props.RESET}>RESET STATE - DEBUGGING</button>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.currentRecording
})

const mapDispatchToProps = dispatch => ({
    RESET: e => dispatch({type:'RESET'}),
    ADD_HARDWARE_RECORDING_NUMBER: e => dispatch({type:'ADD_HARDWARE_RECORDING_NUMBER', payload:e}),
    CHANGE_RECORDING_STATE: e => dispatch({type:'CHANGE_RECORDING_STATE'}),
    ADD_SYMPTOM: e => dispatch({type:'ADD_SYMPTOM', payload:e})
})

export default connect(mapStateToProps, mapDispatchToProps)(Recording)
import React from 'react'
import { SchemaFormV2 } from '../components/forms/SchemaFormV2'
import { RecordingButton } from '../components/buttons/RecordingButtonV2'
import { connect } from 'react-redux'
import Snackbar from '../components/notifications/snackbar'
import { socket } from '../serverSocket'

const RatingSchema = [
    {type:'range', label:'Overall', name:'overall', min:0, max:10},
    {type:'range', label:'Abdominal Pain', name:'abdPain', min:0, max:10},
    {type:'range', label:'Bloating', name:'bloating', min:0, max:10},
    {type:'range', label:'Wind', name:'wind', min:0, max:10},
]

const RecordingNumberSchema = [
    {type:'number', label:'Hardware Recording Number', name:'hardwareRecordingNumber', hint:'This NUMBER is displayed on the recording device\'s screen'}
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

    socket.on('res@client/recording/state', data => {
        console.log(data)
        props.ADD_RECORDING_ID(data.recordingId)
    })

    return (
        <div>
            <Snackbar />
            {props.isReadyToRecord ? 
                <RecordingButton onClick={props.CHANGE_RECORDING_STATE}>{
                    props.isRecording ? 'Pause Logging' : props.recordingClickCounter > 1 ? 'Resume Logging' : 'Start Logging'
                }</RecordingButton> :
                <SchemaFormV2 onReadyForm={props.ADD_HARDWARE_RECORDING_NUMBER} schema={RecordingNumberSchema}/>
            }
            <p>{props.symptomArray ? 
            `"${props.symptomArray[props.symptomArray.length-1].symptom}" was added at ${new Date()}` : 
            props.isRecording ? 'no symptoms yet...' : null}</p>
            <div>{props.isRecording ? 
                <div>
                    <p>Simple Symptoms</p>
                    <button onClick={e => props.ADD_SHORTCUT_SYMPTOM({symptom:'burp'})}>burp</button>
                    <button onClick={e => props.ADD_SHORTCUT_SYMPTOM({symptom:'fart'})}>fart</button>
                    <button onClick={e => props.ADD_SHORTCUT_SYMPTOM({symptom:'gurgle'})}>gurgle</button>
                    <button onClick={e => props.ADD_SHORTCUT_SYMPTOM({symptom:'urge to poo'})}>urge to poo</button>
                
                    <p>Complex Symptoms</p>
                    <button onClick={e => props.EDIT_SYMPTOM({symptom:'pain'})}>pain</button>
                    <button onClick={e => props.EDIT_SYMPTOM({symptom:'bloating'})}>bloating</button>
                    <button onClick={e => props.EDIT_SYMPTOM({symptom:'constipation'})}>constipation</button>
                    <button onClick={e => props.EDIT_SYMPTOM({symptom:'custom'})}>custom</button>
                    {(props.currSymptom && props.isComplex) ? 
                    <SchemaFormV2 onReadyForm={props.ADD_SYMPTOM} schema={SymptomSchema[props.currSymptom.symptom]}/> : 
                    null
                    }
                </div> : 
                props.isReadyToRecord ? 
                (props.recordingClickCounter > 1) ? 
                <div>
                    <p style={{textAlign:'center'}}>Rate your overall feeling throughout this recording</p>
                    <p style={{textAlign:'center'}}>When you've finished rating this recording, press the 'Submit' button to complete the recording</p>
                    <SchemaFormV2 onReadyForm={e => {
                        props.ADD_RATING(e)
                        props.RESET()
                    }} schema={RatingSchema}/>
                </div> :
                'not recording'
                :
                null
            }</div>
            <br />
            {/* <button onClick={props.RESET}>RESET STATE - DEBUGGING</button> */}
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
    ADD_SHORTCUT_SYMPTOM: e => dispatch({type:'ADD_SHORTCUT_SYMPTOM', payload:e}),
    EDIT_SYMPTOM: e => dispatch({type:'EDIT_SYMPTOM', payload:e}),
    ADD_SYMPTOM: e => dispatch({type:'ADD_SYMPTOM', payload:e }),
    ADD_RATING: e => dispatch({type:'ADD_RATING', payload:e}),
    ADD_RECORDING_ID: e => dispatch({type:'ADD_RECORDING_ID', payload:e})
})

export default connect(mapStateToProps, mapDispatchToProps)(Recording)
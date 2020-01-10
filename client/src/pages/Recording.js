import React, {useState, useEffect} from 'react'
import { SchemaFormV2 } from '../components/forms/SchemaFormV2'
import { RecordingButton } from '../components/buttons/RecordingButtonV2'

const RatingSchema = [
    {type:'range', label:'Overall', name:'overall', min:0, max:10},
    {type:'range', label:'Abdominal Pain', name:'abdPain', min:0, max:10},
    {type:'range', label:'Bloating', name:'bloating', min:0, max:10},
    {type:'range', label:'Wind', name:'wind', min:0, max:10},
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

    let [state, setState] = useState({isDetailed:false, isRecording:false, pressCount:0, readyToRecord:false})

    useEffect(() => {
        if(state.newSymptomSubmission === true && props.onRecordingSubmit) {
            props.onRecordingSubmit(state.symptom)
            setState({...state, newSymptomSubmission:false, prevSymptom:state.symptom, symptom:{}})
        }
        if(state.newRatingSubmission === true){
            if(props.onRatingSubmit){
                props.onRatingSubmit(state.rating)
            }
            setState({...state, isRecording:false, newRatingSubmission:false, pressCount:0, recordingPaused:false, readyToRecord: false})
        }
        if(state.symptomChange === true){
            setState({...state, symptomChange:false, readyToRecord:true})
        }
        if(state.recordingChange === true){
            if(props.onRecordingPress){
                props.onRecordingPress({...state, isRecording:state.isRecording, hardwareRecordingNumber:state.hardwareRecordingNumber})
            }
            setState({...state, recordingChange:false, readyToRecord: true})
        }
        if(state.changeHardwareRecordingNumber == true){
            setState({...state, readyToRecord:true, changeHardwareRecordingNumber:false})
        }
    })

    const changeRecording = () => {
        setState({
            pressCount:state.pressCount+1, 
            isRecording: state.isRecording ? false : true,
            recordingChange:true,
            hardwareRecordingNumber:state.hardwareRecordingNumber
        })
        console.log(state)
    } 

    const ratingSubmit = e => {
        if(e){
            setState({...state, rating:{...e}, newRatingSubmission:true})
        }
    }

    const symptomSubmit = e => {
        if(e){
            let newSymptom = {...state.symptom, ...e, timestamp:new Date()}
            setState({...state, symptom:{...newSymptom}, newSymptomSubmission:true, isDetailed:false})
        }
    }

    const symptomShortcutSubmit = name => {
        let newSymptom = {symptom:name, timestamp: new Date()}
        setState({...state, symptom:{...newSymptom}, newSymptomSubmission:true})
    }

    const generateComplexSelections = object => {
        console.log(state, object)
        if((state.detailedName === object) && (state.isDetailed === true)) {
            setState({...state, isDetailed:false, detailedName:null})
            return 
        }
        setState({...state, symptom:{symptom:object}, isDetailed:true, detailedName:object, symptomChange:true})
    }

    const hardwareRecordingNumber = e => {
        if(e) setState({...state, ...e, changeHardwareRecordingNumber:true})
    }

    return(
        <div>
            <h1 style={{textAlign:'center', color:'rgba(0,0,0,.86)'}}>Record Bowel Sounds</h1>

            {(state.readyToRecord == true) ? 
            <RecordingButton onClick={changeRecording}>{state.isRecording ? 
                <i className="material-icons pause">pause</i> :
                (state.pressCount > 1) ? 
                <i className="material-icons play">play_arrow</i> : 
                <i className="material-icons record">fiber_manual_record</i>}
            </RecordingButton> :
            <SchemaFormV2 onReadyForm={hardwareRecordingNumber} schema={[{type:'number', label:'Hardware Recording Number', name:'hardwareRecordingNumber'}]} /> 
            }

            <br />
            {props.recordingId ? <p>{`Recording ID: ${props.recordingId}`}</p> : null}
            <p style={{textAlign:'center'}}>{state.prevSymptom ? `${state.prevSymptom.symptom} was just added` : '...' }</p>
            { (state.isRecording === true) ? 
                <div>
                    <p>Simple Symptoms</p>
                    <button onClick={e => symptomShortcutSubmit('burp')}>burp</button>
                    <button onClick={e => symptomShortcutSubmit('fart')}>fart</button>
                    <button onClick={e => symptomShortcutSubmit('gurgle')}>gurgle</button>
                    <button onClick={e => symptomShortcutSubmit('urge to poo')}>urge to poo</button>
                    <br />
                    <p>Complex Symptoms</p>

                    {Object.keys(SymptomSchema).map((object, index) => {
                        return(
                            <button key={object} onClick={() => generateComplexSelections(object)}>
                                {object}
                            </button>
                        )
                    })}

                    {state.isDetailed ? <SchemaFormV2 onReadyForm={symptomSubmit} schema={SymptomSchema[state.detailedName]}/> : null}

                </div> : 
                (state.pressCount > 1) ? <SchemaFormV2 onReadyForm={ratingSubmit} schema={RatingSchema}/> : null
            }
        </div>
    )
}

export default Recording
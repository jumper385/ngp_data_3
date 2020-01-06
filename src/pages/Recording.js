import React, { useState, useEffect} from 'react';
import styled from 'styled-components'
import { RecordButton, ValuedPill } from '../components/buttons';
import { SchemaForm } from '../components/forms/schemaForm';

const StyledContainer = styled.div`
  * {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap');
    font-family: 'Nunito', sans-serif;
  }
`

const AppearanceForm = props => {

    const Schema = [
        { type: 'text', name: 'symptom', label: 'Symptom' },
        { type: 'range', name: 'severity', label: 'Severity', min: 0, max: 10 },
        { type: 'text', name: 'location', label: 'Location', hint: 'Note down any location within the abdominal area' },
        { type: 'text', name: 'notes', label: 'Notes' }
    ]

    const onChange = formState => {
        if(props.onChange){
            props.onChange(formState)
        }
    }

    const onSubmit = formState => {
        if(props.onSubmit){
            props.onSubmit(formState)
        }
    }

    if (props.isCustom) {
        return (
            <SchemaForm schema={Schema} onSubmit={onSubmit} onChange={onChange} />
        )
    } else {
        return ''
    }

}

const SymptomForm = props => {

    let [state, setState] = useState({isCustom: false})

    useEffect(() => {

        if(state.shortcutClicked==true){
            setState({shortcutClicked:false})

            if(props.onSubmit){
                props.onSubmit(state.symptom)
            }
        }

    })

    const shortcutSymptom = name => {
        setState({ ...state, isCustom: false, symptom:{symptom:name}, shortcutClicked:true})
    }

    const customSymptom = e => {
        setState({ ...state, isCustom: state.isCustom ? false : true })
    }

    const onFormChange= e => {
        setState({...state, symptom:{...e}})
    }

    const submitForm = e => {
        if(props.onSubmit){
            props.onSubmit(state.symptom)
            setState({...state, isCustom:false, symptom:null})
        }
    }

    return(
        <div>
            <div>
                <p>One Press Shortcuts</p>
                <ValuedPill onClick={() => shortcutSymptom('burp')} text='+ Burp' value='burp' />
                <ValuedPill onClick={() => shortcutSymptom('gurgle')} text='+ Gurgle' value='gurgle' />
                <ValuedPill onClick={() => shortcutSymptom('fart')} text='+ Fart' value='fart' />
                <ValuedPill onClick={() => shortcutSymptom('urgeToPoop')} text='+ Urge To Poo' value='urgeToPoop' />
            </div>
            <div>
                <p>Descriptive Symptoms (Pain,Twinge, Bloating etc...)</p>
                <ValuedPill onClick={() => customSymptom()} text={`${!state.isCustom ? '+' : '-'} Create Descriptive Symptom`} />
                <AppearanceForm onChange={onFormChange} onSubmit={submitForm} isCustom={state.isCustom} />
            </div>
        </div>
    )
}

const Recording = props => {

    let [state, setState] = useState({isRecording: false, recordClicks:0})

    const changeRecording = () => {
        setState({ ...state, recordClicks:state.recordClicks+1, isRecording: state.isRecording ? false : true })
    }

    const onSymptomSubmit = e => {
        setState({...state, symptom:e, readyToSubmit:true})
    }

    const onRatingSubmit = e => {
        setState({...state, ratings:e, recordClicks:0, readyToSubmit:true})
    }

    useEffect(() => {
        if(props.onSymptomSubmit && (state.readyToSubmit == true)){
            props.onSymptomSubmit(state.symptom)
            setState({...state, symptom:null, readyToSubmit:false})
        }
    })

    return (
        <StyledContainer>

            <RecordButton onClick={changeRecording} />

            { !state.isRecording ?  (state.recordClicks === 0) ? 
                <SymptomForm onSubmit={onSymptomSubmit} /> : 
                <SchemaForm onSubmit={onRatingSubmit} schema={[
                    {type:'range', name:'overall', label:'Overall', min:0, max:10},
                    {type:'range', name:'abdPain', label:'Abdominal Pain', min:0, max:10},
                    {type:'range', name:'wind', label:'Wind', min:0, max:10},
                    {type:'range', name:'bloating', label:'Bloating', min:0, max:10},
                    {type:'text', name:'notes', label:'Notes'},
                ]}/> : 
                <SymptomForm onSubmit={onSymptomSubmit}/>
            }

        </StyledContainer>
    )
}

export default Recording
import React, { useState } from 'react'
import { PageBase } from '../pageBase'
import { animated, useSpring } from 'react-spring'
import { faMicrophoneAlt, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Timer from 'react-compound-timer'
import ComplexSymptomForm from './complexSymptomForm'

const RecordButton = styled(animated.div)`
    position:absolute;
    height:72pt;
    width:72pt;
    border-radius:50%;
    background: linear-gradient(90deg, #241034 0%, #1C0638 100%);
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    top:0;
    left:0;

    .icon {
        display:flex;
        align-items:center;
        justify-content: center;
        font-size:24pt;
    }

`

const RecordingDisplay = styled(animated.div)`
    position:absolute;
    top:0;
    right:0;
    height:137pt;
    width:100vw;
    background:white;
    border-radius:0 0 12pt 12pt;
    position:absolute;

    .recordingDurationContainer {
        bottom:48pt;
        right:36pt;
        position:absolute;

        .recordingDurationLabel {
            margin:0;
            text-transform:uppercase;
            font-size:9pt;
            color:rgba(0,0,0,.24);
            font-weight:bold;
            position:relative;
        }

        .recordingDuration {
            display:inline-flex;
            align-items:center;
            position:absolute;
            right:0;
    
            .auxLabel {
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                justify-content:space-between;
                margin:0;
                font-size:9pt;
                margin-left:3pt;
                height:20pt;
            }
    
            .minLabel {
                margin:0;
                text-transform:uppercase;
            }
            .sec {
                font-size:9pt;
                margin:0;
            }
            .min {
                font-size:24pt;
                margin:0;
            }
        }

    }

`
const SymptomContainerHolder = styled(animated.div)`
    position:absolute;
    top:171pt;
    right:0;
    width:100%;

    .holderTitle {
        color:white;
        margin-left:42pt;
        font-size:9pt;
    }

`
const SymptomContainer = styled(animated.div)`
    background:none;
    overflow-x:scroll;
    width:100%;
    display:flex;
    box-sizing:border-box;

    .symptomCard {
        margin: 0 6pt;
        background:white;
        border-radius:12pt;
        padding:9pt;
        max-width:120pt;
        box-sizing:border-box;
        font-size:9pt;
        flex-shrink:0;
        flex-grow:0;

        : first-of-type {
            margin-left:36pt;
            flex-shrink:0;
            flex-grow:0;
        }

    }

`

const DataCollection = props => {

    const buttonAnimation = useSpring({
        from: {
            transform: props.recordingReducer.isRecording ? 'translate(calc(72pt - 50%), calc(300pt - 50%)) rotate(360deg) scale(1)' : 'translate(calc(36pt  - 50%), calc(100pt - 50%)) rotate(0deg) scale(0.5)',
        },
        transform: !props.recordingReducer.isRecording ? 'translate(calc(72pt - 50%), calc(300pt - 50%)) rotate(360deg) scale(1)' : 'translate(calc(36pt  - 50%), calc(100pt - 50%)) rotate(0deg) scale(0.5)',
        config: {
            tension: 200,
            mass: 0.25,
            friction: 18,
            precision: 0.001,
        }
    })

    const colorDarken = useSpring({
        background: !props.recordingReducer.isRecording ? 'linear-gradient(90deg, white 0%, white 100%)' : 'linear-gradient(90deg, #241034 0%, #1C0638 100%)',
        from: {
            background: props.recordingReducer.isRecording ? 'linear-gradient(90deg, white 0%, white 100%)' : 'linear-gradient(90deg, #241034 0%, #1C0638 100%)'
        },
        config: {
            tension: 300,
            mass: 0.25,
            friction: 18,
            precision: 0.001,
        }
    })

    const slideInTop = useSpring({
        from: {
            top: props.recordingReducer.isRecording ? '-100%' : '0%'
        },
        top: !props.recordingReducer.isRecording ? '-100%' : '0%',
        config: {
            tension: 300,
            mass: 0.3,
            friction: 25,
            precision: 0.001,
        }
    })

    const slideFromRight = useSpring({
        from: {
            right: props.recordingReducer.isRecording ? '-100%' : '0%'
        },
        right: !props.recordingReducer.isRecording ? '-100%' : '0%',
        config: {
            tension: 300,
            mass: 0.3,
            friction: 25,
            precision: 0.001,
        }
    })

    const complexSlideIn = useSpring({
        from: {
            left: props.recordingReducer.complexSymptomState ? '-100%' : '0%'
        },
        left: !props.recordingReducer.complexSymptomState ? '-100%' : '0%',
        config: {
            tension: 300,
            mass: 0.3,
            friction: 25,
            precision: 0.001,
        }
    })

    return (

        <Timer startImmediately={false} lastUnit='m'>
            {({ start, resume, pause, reset }) => {

                const recordButtonPress = () => {
                    if (props.recordingReducer.isRecording) {
                        props.STOP_RECORDING()
                        pause()
                        reset()
                        props.MOVE_PAGE(2)

                    } else {
                        props.START_RECORDING()
                        start()
                    }
                }

                return (
                    <PageBase style={{ ...colorDarken, paddingBottom: '64pt' }}>
                        {props.recordingReducer.symptomArray ?
                            <p style={{ position: 'absolute', top: '24pt', right: '32pt', zIndex:'103', color:'rgba(0,0,0,.24)'}}>({props.recordingReducer.symptomArray && props.recordingReducer.symptomArray.length}) - a {props.recordingReducer.symptomArray && props.recordingReducer.symptomArray[props.recordingReducer.symptomArray.length - 1].symptom} was added</p> :
                            'nothing..'}
                        <RecordingDisplay style={slideInTop}>
                            <div className='recordingDurationContainer'>
                                <p className='recordingDurationLabel'>Recording Duration</p>
                                <div className='recordingDuration'>
                                    <p className='min'><Timer.Minutes /></p>
                                    <div className='auxLabel'>
                                        <p className='sec'><Timer.Seconds /></p>
                                        <p className='minLabel'>min</p>
                                    </div>
                                </div>
                            </div>

                        </RecordingDisplay>

                        <RecordButton style={buttonAnimation} onClick={recordButtonPress}>
                            <FontAwesomeIcon className='icon' icon={props.recordingReducer.isRecording ? faStop : faMicrophoneAlt} />
                        </RecordButton>

                        <p style={{ position: 'absolute', top: '275pt', width: '130pt', left: '125pt', fontSize: '9pt', color: 'rgba(0,0,0,.24)' }}>When you're ready, press this button and the device's start button at the same time</p>

                        <SymptomContainerHolder style={{ top: '171pt', ...slideFromRight }}>
                            <p className='holderTitle'>Simple Symptoms</p>
                            <SymptomContainer>

                                <div className='symptomCard' onClick={() => props.ADD_SIMPLE_SYMPTOM({
                                    symptom: 'burp',
                                    recordingid: props.recordingReducer.recordingId,
                                    username: props.metaReducer.username,
                                })}>
                                    <p>Burp</p>
                                </div>

                                <div className='symptomCard' onClick={() => props.ADD_SIMPLE_SYMPTOM({
                                    symptom: 'urgeToPoo',
                                    recordingid: props.recordingReducer.recordingId,
                                    username: props.metaReducer.username,
                                })}>
                                    <p>Urge to Poo</p>
                                </div>

                                <div className='symptomCard' onClick={() => props.ADD_SIMPLE_SYMPTOM({
                                    symptom: 'fart',
                                    recordingid: props.recordingReducer.recordingId,
                                    username: props.metaReducer.username,
                                })}>
                                    <p>Fart</p>
                                </div>

                                <div className='symptomCard' onClick={() => props.ADD_SIMPLE_SYMPTOM({
                                    symptom: 'gurgle',
                                    recordingid: props.recordingReducer.recordingId,
                                    username: props.metaReducer.username,
                                })}>
                                    <p>Gurgle</p>
                                </div>

                            </SymptomContainer>
                        </SymptomContainerHolder>

                        <SymptomContainerHolder style={{ top: '256pt', ...slideFromRight }}>
                            <p className='holderTitle'>Complex Symptoms</p>
                            <SymptomContainer>

                                <div className='symptomCard' onClick={() => props.ENTERING_COMPLEX_SYMPTOM('pain')}>
                                    <p>Pain</p>
                                </div>

                                <div className='symptomCard' onClick={() => props.ENTERING_COMPLEX_SYMPTOM('squeeze')}>
                                    <p>Squeeze</p>
                                </div>

                                <div className='symptomCard' onClick={() => props.ENTERING_COMPLEX_SYMPTOM('cramping')}>
                                    <p>Cramping</p>
                                </div>

                                <div className='symptomCard' onClick={() => props.ENTERING_COMPLEX_SYMPTOM('custom')}>
                                    <p>Custom</p>
                                </div>

                            </SymptomContainer>
                        </SymptomContainerHolder>

                        <PageBase style={{ position: 'absolute', paddingBottom: '64pt', ...complexSlideIn }}>
                            <p onClick={() => props.REMOVE_COMPLEX_STATE()}>Close</p>
                            <div className='pageHeading'>
                                <p className='pageCategory'>Complex Symptom</p>
                                <p className='pageTitle'>{props.recordingReducer.complexSymptomState}</p>
                            </div>
                            <ComplexSymptomForm />
                        </PageBase>

                    </PageBase>
                )

            }}

        </Timer>
    )
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    ADD_SIMPLE_SYMPTOM: e => dispatch({ type: 'ADD_SIMPLE_SYMPTOM', payload: e }),
    START_RECORDING: e => dispatch({ type: 'START_RECORDING' }),
    STOP_RECORDING: e => dispatch({ type: 'STOP_RECORDING' }),
    ENTERING_COMPLEX_SYMPTOM: e => dispatch({ type: 'ENTERING_COMPLEX_SYMPTOM', payload: e }),
    REMOVE_COMPLEX_STATE: e => dispatch({ type: 'REMOVE_COMPLEX_STATE' }),
    MOVE_PAGE: pageNumber => dispatch({ type: 'MOVE_PAGE', payload: pageNumber }),
})

export default connect(mapStateToProps, mapDispatchToProps)(DataCollection)
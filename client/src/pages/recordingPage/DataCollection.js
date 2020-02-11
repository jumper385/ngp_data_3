import React, { useState } from 'react'
import { PageBase } from '../pageBase'
import { animated, useSpring } from 'react-spring'
import { faMicrophoneAlt, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Timer from 'react-compound-timer'

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
    height:33vh;
    width:100vw;
    background:white;
    border-radius:0 0 12pt 12pt;
    position:absolute;

    .recordingDurationContainer {
        bottom:48pt;
        left:36pt;
        position:absolute;

        .recordingDurationLabel {
            margin:0;
            text-transform:uppercase;
            font-size:9pt;
            color:rgba(0,0,0,.24);
            font-weight:bold;
        }

        .recordingDuration {
            display:inline-flex;
            align-items:center;
    
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


const DataCollection = props => {

    let [state, setState] = useState({})

    const buttonAnimation = useSpring({
        from: {
            transform: state.bool ? 'translate(calc(50vw - 50%), calc(50vh - 50%)) rotate(360deg) scale(1)' : 'translate(calc(66.666vw - 50%), calc(20vh - 50%)) rotate(0deg) scale(0.5)',
        },
        transform: !state.bool ? 'translate(calc(50vw - 50%), calc(50vh - 50%)) rotate(360deg) scale(1)' : 'translate(calc(80vw - 50%), calc(20vh - 50%)) rotate(0deg) scale(0.5)',
        config: {
            tension: 200,
            mass: 0.25,
            friction: 18,
            precision: 0.001,
        }
    })

    const colorDarken = useSpring({
        background: !state.bool ? 'linear-gradient(90deg, white 0%, white 100%)' : 'linear-gradient(90deg, #241034 0%, #1C0638 100%)',
        from: {
            background: state.bool ? 'linear-gradient(90deg, white 0%, white 100%)' : 'linear-gradient(90deg, #241034 0%, #1C0638 100%)'
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
            top: state.bool ? '-100%' : '0%'
        },
        top: !state.bool ? '-100%' : '0%',
        config: {
            tension: 300,
            mass: 0.3,
            friction: 25,
            precision: 0.001,
        }
    })

    return (

        <Timer startImmediately={false}>
            {({ start, resume, pause, reset, timerState }) => {

                const recordButtonPress = () => {
                    if (state.bool) {
                        pause()
                        reset()
                    } else {
                        start()
                    }
                    setState({ bool: state.bool ? false : true })
                }

                return (
                    <PageBase style={colorDarken}>
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
                            <FontAwesomeIcon className='icon' icon={state.bool ? faStop : faMicrophoneAlt} />
                        </RecordButton>

                    </PageBase>
                )

            }}

        </Timer>
    )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(DataCollection)
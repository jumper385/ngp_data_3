import React, { useState, useEffect } from 'react'
import { BasePage } from '../pageBase'
import { ToggleSwitch } from '../../components/buttons/buttons'
import { faMicrophoneAlt, faStop, faUndoAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { animated, useSpring, useTransition } from 'react-spring'
import Timer from 'react-compound-timer'
import { Keyframes } from 'react-spring/renderprops'

const LogControl = styled(animated.div)`
    position:absolute;
    top:0;
    width:100vw;
    left:0;
    height:35vh;
    border-radius:0 0 12pt 12pt;
    background:white;
    padding:0;
    margin:0;
`

const RecordButton = styled(animated.button)`
    height:36pt;
    width:36pt;
    border:none; 
    background:linear-gradient(90deg, #241034 0%, #1C0638 100%);
    box-shadow: 0px 0px 9pt #575757 ;
    color:white;
    border-radius:36pt;
    padding:0;
    margin:0;
    font-size:18pt;
`

const UndoButton = styled(animated.button)`
    position:absolute;
    right:18pt;
    top:18pt;
    font-size:15pt;
    color:rgba(0,0,0,.18);
    background:none;
    border:none;
`

const SimpleSymptomButton = styled.button`
    height:100pt;
    flex-shrink:0;
    flex-grow:0;
    border-radius:12pt;
    border:none;
    background:white;
    padding:12pt;
    margin:6pt;

    : first-of-type {
        margin-left:24pt;
    }

    : last-of-type {
        margin-right:12pt;
    }


    div {

        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-top:64pt;
        width:100%;
        font-size:9pt;

        p {
            margin:0;
            text-transform:uppercase;
            font-weight:bold;
        }
    
        .buttonIcon { 
            margin:0;
            margin-right:12pt;
        }
    }

`

const SymptomHolder = styled.div`
    overflow-x:scroll;
    display:flex;
`

const TimeHolder = styled.div`
    display:flex;
    box-sizing:border-box;
    margin:0;
    padding:0;

    .mins {
        margin:0;
        font-size:30pt;
        height:100%;
        margin-right:3pt
    }

    .auxHolder { 
        display:flex;
        flex-direction:column;
        align-items:flex-start
        font-size:9pt;
        justify-content:space-around;
        padding: 3pt 0;
        box-sizing:border-box;

        .minLabel {
            margin:0;
            text-transform:uppercase
            font-weight:bold;
        }

        .sec { 
            margin:0;
        }

    }
`

const FeedbackBar = styled.div`
    position:absolute;
    width:100%;
    height:60pt;
    bottom:0;
    left:0;
    box-sizing:border-box;
    border-radius:0 0 12pt 12pt;
`

const WaitingAnimation = Keyframes.Spring(async next => {
    while (true) {

        await next({
            transform: 'scale(1) rotate(0deg)',
            bottom:'24pt',
            opacity:1,
            from: { transform: 'scale(0) rotate(360deg)', bottom:'-12pt', opacity:0},
            config: { tension: 500, mass: 2, friction: 12 }
        })

        await next({
            transform: 'scale(0) rotate(360deg)',
            bottom:'-12pt',
            opacity:0,
            from: { transform: 'scale(1) rotate(0deg)', bottom:'24pt', opacity:1},
            config: { tension: 500, mass: 2, friction: 12 }
        })
    }
})

const Waiting = styled(animated.div)`
    position:absolute;
    text-align:center;
    width:100%;
    height:24pt;
    width:24pt;
    background:#241034;
    left:calc(50vw - 12pt);
    border-radius:6pt;
`

const Recording = props => {

    let [state, setState] = useState([1, 2, 3, 4])
    let [index, setIndex] = useState(0)

    let transition = useTransition(state[index], item => item, {
        from: { opcaity: 0, bottom: '-100%', transform: 'scale(1,0)' },
        enter: { opacity: 1, bottom: '0%', transform: 'scale(1,1)' },
        leave: { opacity: 0, bottom: '100%', transform: 'scale(1,0' },
    })

    return (
        <BasePage style={{ background: 'linear-gradient(90deg, #241034 0%, #1C0638 100%)', padding: 0 }}>

            <LogControl>
                <div style={{ position: 'relative', width: '100%', height: '100%', boxSizing: 'border-box' }}>

                    <UndoButton>
                        <FontAwesomeIcon icon={faUndoAlt} />
                    </UndoButton>

                    <div style={{ position: 'absolute', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', top: '58pt', boxSizing: 'border-box', padding: '0 16pt' }}>

                        <Timer lastUnit='m'>

                            <div>
                                <p style={{ margin: 0, textTransform: 'uppercase', fontWeight: 'bold', color: 'rgba(0,0,0,.12)', fontSize: '9pt' }}>Recording Time</p>
                                <TimeHolder className='times'>
                                    <div className='mins'><Timer.Minutes /></div>
                                    <div className='auxHolder'>
                                        <div className='sec'><Timer.Seconds /></div>
                                        <p className='minLabel'>min</p>
                                    </div>
                                </TimeHolder>
                            </div>

                        </Timer>

                        <RecordButton>
                            <FontAwesomeIcon icon={faStop} />
                        </RecordButton>
                    </div>

                    <FeedbackBar>
                        <WaitingAnimation>
                            {styles => <Waiting style={styles}></Waiting>}
                        </WaitingAnimation>
                    </FeedbackBar>
                </div>
            </LogControl>

            <div style={{ marginTop: 'calc(35vh + 24pt)' }}>
                <p style={{ color: 'white', fontSize: '9pt', marginLeft: '24pt' }}>Simple Symptoms</p>
                <SymptomHolder>

                    <SimpleSymptomButton className='simpleSymptom' >
                        <div>
                            <FontAwesomeIcon className='buttonIcon' icon={faPlusCircle} />
                            <p>Burp</p>
                        </div>
                    </SimpleSymptomButton>

                    <SimpleSymptomButton className='simpleSymptom' >
                        <div>
                            <FontAwesomeIcon className='buttonIcon' icon={faPlusCircle} />
                            <p>Fart</p>
                        </div>
                    </SimpleSymptomButton>

                    <SimpleSymptomButton className='simpleSymptom' >
                        <div>
                            <FontAwesomeIcon className='buttonIcon' icon={faPlusCircle} />
                            <p>Gurgle</p>
                        </div>
                    </SimpleSymptomButton>

                    <SimpleSymptomButton className='simpleSymptom' >
                        <div>
                            <FontAwesomeIcon className='buttonIcon' icon={faPlusCircle} />
                            <p>Heartburn</p>
                        </div>
                    </SimpleSymptomButton>
                </SymptomHolder>
            </div>

            <div style={{ marginTop: '24pt' }}>
                <p style={{ color: 'white', fontSize: '9pt', marginLeft: '24pt' }}>Complex Symptoms</p>
                <SymptomHolder>

                    <SimpleSymptomButton className='simpleSymptom' >
                        <div>
                            <FontAwesomeIcon className='buttonIcon' icon={faPlusCircle} />
                            <p>Pain</p>
                        </div>
                    </SimpleSymptomButton>

                    <SimpleSymptomButton className='simpleSymptom' >
                        <div>
                            <FontAwesomeIcon className='buttonIcon' icon={faPlusCircle} />
                            <p>Bloating</p>
                        </div>
                    </SimpleSymptomButton>

                    <SimpleSymptomButton className='simpleSymptom' >
                        <div>
                            <FontAwesomeIcon className='buttonIcon' icon={faPlusCircle} />
                            <p>Twinge</p>
                        </div>
                    </SimpleSymptomButton>

                    <SimpleSymptomButton className='simpleSymptom' >
                        <div>
                            <FontAwesomeIcon className='buttonIcon' icon={faPlusCircle} />
                            <p>Custom</p>
                        </div>
                    </SimpleSymptomButton>
                </SymptomHolder>
            </div>

        </BasePage >
    )
}

export default Recording
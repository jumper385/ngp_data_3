import React, {Component, useState} from 'react'
import styled from 'styled-components'
import { socket } from '../../serverSocket'
import { connect } from 'react-redux'

const SnackbarContainer = styled.div`
    position:fixed;
    bottom:0pt;
    width:100vw
    background:rgba(0,0,0,.18);
    display:${props => props.hidden ? 'none' : null }
`

const Snackbar = props => {

    console.log(props.currentRecording.symptomArray)

    let data = (props.currentRecording && props.currentRecording.symptomArray) ? props.currentRecording.symptomArray : null

    return(
        <SnackbarContainer hidden={false}>
            {
                (data == null) ? 
                null : data.slice((data.length > 3) ? -3 : -data.length).map((object, index) => {
                if(object != null) {return <p key={index}>({data.length-index}) - {object.symptom}</p>}
                })
            }
        </SnackbarContainer>
    )

}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(Snackbar)
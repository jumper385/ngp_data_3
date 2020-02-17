import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import PreRecordingPage from './PreRecordingPage'
import DataCollection from './DataCollection'
import OverallRating from './OverallRating'
import { socket } from '../../serverSocket'

const RecordingPageV2 = props => {

    switch (props.recordingReducer.currentPage) {
        case 0:
            return <PreRecordingPage />

        case 1:
            return <DataCollection />

        case 2:
            return <OverallRating />

        default:
            return (
                <h1>There's an error here...</h1>
            )
    }

}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    MOVE_PAGE: pageNumber => dispatch({ type: 'MOVE_PAGE', payload: pageNumber }),
    DEVICE_META: payload => dispatch({ type: 'DEVICE_META', payload: { symptom: payload } }),
    CONNECT_SOCKET: e => dispatch({ type: "CONNECT_SOCKET", payload: e })
})
export default connect(mapStateToProps, mapDispatchToProps)(RecordingPageV2)
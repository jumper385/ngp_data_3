import React from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import PreRecordingPage from './PreRecordingPage'
import DataCollection from './DataCollection'

const RecordingPageV2 = props => {

    let { register, handleSubmit, reset, errors } = useForm()

    const pages = ['preflight', 'start', 'recording', 'overall']

    console.log(props)

    switch (props.recordingReducer.currentPage) {
        case 0:
            return <PreRecordingPage />

        case 1:
            return <DataCollection />

        default:
            return (
                <h1>There's an error here...</h1>
            )
    }

}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    MOVE_PAGE: pageNumber => dispatch({type:'MOVE_PAGE', payload:pageNumber}),
    DEVICE_META: payload => dispatch({type:'DEVICE_META', payload:payload})
})
export default connect(mapStateToProps, mapDispatchToProps)(RecordingPageV2)
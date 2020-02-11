import React from 'react'
import { connect } from 'react-redux'
import { animated, useSpring } from 'react-spring'
import { PageBase } from '../pageBase'
import { useForm } from 'react-hook-form'
import { TextInput, FormButtonContainer, SubmitButton } from '../../components/forms/unifiedInput/formInputs'

const PreRecordingPage = props => {

    let { register, handleSubmit, reset, errors } = useForm()

    const onSubmit = e => {
        props.DEVICE_META(e)
        props.MOVE_PAGE(1)
        reset()
    }

    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'scale(0)' },
        opacity: 1,
        transform: 'scale(1)',
        config: {
            tension: 1000 + Math.random()*100,
            mass: 0.25 + Math.random()*1,
            friction: 10,
            precision: 0.001
        }
    })

    return (

        <PageBase>

            <div style={fadeIn} className='pageHeading'>
                <animated.p style={fadeIn} className='pageCategory'>Recording - Step 1</animated.p>
                <animated.p style={fadeIn} className='pageTitle'>Pre-Recording</animated.p>
                <animated.p style={fadeIn} className='pageInstructions'>Before we begin, we'll need you to enter information about your device below. This will help narrow down which recording this data belongs to.</animated.p>
            </div>

            <animated.form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300pt', margin: '0 auto', ...fadeIn}}>
                <TextInput label='Device Number' error={errors} styling={{
                    name: 'deviceNumber',
                    type: 'number',
                    placeholder: 'Which device are you using right now?',
                    ref: register({ required: true }),
                    pattern:'[0-9]+',
                }} hint='This is the number located on the back of your device' />

                <TextInput label='Hardware Recording Number' error={errors} styling={{
                    name: 'hardwareRecordingNumber',
                    type: 'number',
                    placeholder: 'What\'s the recording number on the screen?',
                    ref: register({ required: true }),
                    pattern:'[0-9]+',
                }} hint='This is the number located on the device display' />

                <br />

                <FormButtonContainer>
                    <SubmitButton type='submit' />
                </FormButtonContainer>

            </animated.form>

        </PageBase>

    )
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    MOVE_PAGE: pageNumber => dispatch({type:'MOVE_PAGE', payload:pageNumber}),
    DEVICE_META: payload => dispatch({type:'DEVICE_META', payload:payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(PreRecordingPage)
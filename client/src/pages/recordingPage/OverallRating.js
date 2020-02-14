import React from 'react'
import { connect } from 'react-redux'
import { animated, useSpring } from 'react-spring'
import { PageBase } from '../pageBase'
import { useForm } from 'react-hook-form'
import { TextInput, FormButtonContainer, SubmitButton } from '../../components/forms/unifiedInput/formInputs'
import { Redirect, useHistory } from 'react-router-dom'

const OverallRating = props => {

    let history = useHistory()

    let { register, handleSubmit, reset, errors } = useForm({
        defaultValues: {
            overall: 5,
            abdPain: 5,
            bloating: 5,
            wind: 5
        }
    })

    const onSubmit = e => {
        history.push('/')
        reset()
    }

    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'scale(0)' },
        opacity: 1,
        transform: 'scale(1)',
        config: {
            tension: 1000 + Math.random() * 100,
            mass: 0.25 + Math.random() * 1,
            friction: 10,
            precision: 0.001
        }
    })

    return (

        <PageBase style={{marginBottom:'30pt'}}>

            <div style={fadeIn} className='pageHeading'>
                <animated.p style={fadeIn} className='pageCategory'>Recording - Final Step</animated.p>
                <animated.p style={fadeIn} className='pageTitle'>Overall Ratings</animated.p>
                <animated.p style={fadeIn} className='pageInstructions'>We've finished the recording! All we need you to do now is to tell us how you felt in each of the following categories below during the recording.</animated.p>
            </div>

            <animated.form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300pt', margin: '0 auto', ...fadeIn }}>

                <TextInput label='Overall Symptoms' error={errors} styling={{
                    name: 'overall',
                    type: 'range',
                    min: 0,
                    max: 10,
                    ref: register({ required: true }),
                }} />

                <TextInput label='Abdominal Pain' error={errors} styling={{
                    name: 'abdPain',
                    type: 'range',
                    min: 0,
                    max: 10,
                    ref: register({ required: true }),
                }} />

                <TextInput label='Bloating' error={errors} styling={{
                    name: 'bloating',
                    type: 'range',
                    min: 0,
                    max: 10,
                    ref: register({ required: true }),
                }} />

                <TextInput label='Wind' error={errors} styling={{
                    name: 'wind',
                    type: 'range',
                    min: 0,
                    max: 10,
                    ref: register({ required: true }),
                }} />

                <br />

                <FormButtonContainer>
                    <SubmitButton type='submit' value='Submit Recording' />
                </FormButtonContainer>

            </animated.form>

        </PageBase>

    )
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    MOVE_PAGE: pageNumber => dispatch({ type: 'MOVE_PAGE', payload: pageNumber }),
    DEVICE_META: payload => dispatch({ type: 'DEVICE_META', payload: payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(OverallRating)
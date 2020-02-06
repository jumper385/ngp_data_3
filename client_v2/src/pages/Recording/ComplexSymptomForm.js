import React from 'react'
import { TextInput } from '../../components/formInputs/textInput'
import { useForm } from 'react-hook-form'
import { SubmitButton, ButtonRowContainer } from '../../components/buttons/buttons'
import styled from 'styled-components'
import { BasePage } from '../pageBase'
import { connect } from 'react-redux'
import { useSpring } from 'react-spring'

const SymptomForm = props => {

    const SlideIn = useSpring({
        left: props.recordingPage.complexFormOpen ? '12pt' : '400pt',
        opacity: props.recordingPage.complexFormOpen ? 1 : 0,
        from: { 
            left: !props.recordingPage.complexFormOpen ? '12pt' : '400pt', 
            opacity: !props.recordingPage.complexFormOpen ? 1 : 0,
        },
        config: { tension: 1000, mass: 3, friction: 60 }
    })

    let { register, handleSubmit, reset, watch, errors } = useForm()

    const onSubmit = e => {
        console.log(e)
        reset()
    }

    switch (props.symptom) {
        case 'pain':
            return (
                <BasePage style={{
                    width: 'calc(100vw - 24pt)',
                    left: '12pt',
                    minHeight: 'calc(100vh - 24pt)',
                    top: '12pt',
                    borderRadius: '12pt',
                    zIndex: 110,
                    boxShadow: '0 0 24pt rgba(0,0,0,.5)',

                    ...SlideIn

                }}>

                    <p className='subHeading'>Complex Symptom</p>
                    <h1 className='heading'>{props.symptom}</h1>
                    <button onClick={() => {
                        props.toggleSymptomForm()
                        console.log(props)
                    }}>Toggle Page</button>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextInput label='Severity' error={errors} styling={{
                            name: 'severity',
                            type: 'range',
                            min: 0,
                            max: 10,
                            placeholder: `What was the name of the food`,
                            ref: register({ required: true })
                        }} />

                        <TextInput label='Location' error={errors} styling={{
                            name: 'location',
                            type: 'select',
                            ref: register,
                            extras: {
                                options: [
                                    { label: 'Click and choose a Location...', value: '' },

                                    { label: 'Lower Left Abdomen', value: 'lower_lhs' },
                                    { label: 'Lower Mid Abdomen', value: 'lower_mid' },
                                    { label: 'Lower Right Abdomen', value: 'lower_rhs' },

                                    { label: 'Middle Left Abdomen', value: 'mid_lhs' },
                                    { label: 'Middle Mid Abdomen', value: 'mid_mid' },
                                    { label: 'Middle Right Abdomen', value: 'mid_rhs' },

                                    { label: 'Upper Left Abdomen', value: 'upper_lhs' },
                                    { label: 'Upper Mid Abdomen', value: 'upper_mid' },
                                    { label: 'Upper Right Abdomen', value: 'upper_rhs' },
                                ]
                            },
                        }} />

                        <TextInput label='Notes' error={errors} styling={{
                            name: 'notes',
                            type: 'text',
                            placeholder: `Add any extra information here...`,
                            ref: register,
                        }} />



                        <ButtonRowContainer style={{ width: '100%' }}>
                            <SubmitButton style={{ width: '100%' }} type='submit' value='Submit' />
                        </ButtonRowContainer>
                    </form>
                </BasePage>
            )
    }
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    toggleSymptomForm: () => dispatch({ type: 'TOGGLE_SYMPTOM_FORM' })
})
export default connect(mapStateToProps, mapDispatchToProps)(SymptomForm)
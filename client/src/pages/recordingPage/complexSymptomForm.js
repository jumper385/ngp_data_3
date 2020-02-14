import React from 'react'
import { connect } from 'react-redux'
import { FormButtonContainer, SubmitButton, TextInput } from '../../components/forms/unifiedInput/formInputs'
import { useForm } from 'react-hook-form'

const ComplexSymptomForm = props => {

    let { register, errors, handleSubmit, reset } = useForm({
        defaultValues:{severity:'0'}
    })

    const onSubmit = e => {
        console.log(e)
        props.ADD_COMPLEX_SYMPTOM({symptom:props.recordingReducer.complexSymptomState, ...e})
        props.REMOVE_COMPLEX_STATE()
        reset()
    }

    switch (props.recordingReducer.complexSymptomState) {
        case 'pain':
            return (
                <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300pt', margin: '0 auto' }}>
                    <TextInput label='Severity' error={errors} styling={{
                        name: 'severity',
                        type: 'range',
                        min: 0,
                        max: 10,
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

                    <br />

                    <FormButtonContainer style={{ width: '100%' }}>
                        <SubmitButton style={{ width: '100%' }} type='submit' value='Submit' />
                    </FormButtonContainer>

                </form>
            )

        case 'squeeze':
            return (
                <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300pt', margin: '0 auto' }}>
                    <TextInput label='Severity' error={errors} styling={{
                        name: 'severity',
                        type: 'range',
                        min: 0,
                        max: 10,
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

                    <br />

                    <FormButtonContainer style={{ width: '100%' }}>
                        <SubmitButton style={{ width: '100%' }} type='submit' value='Submit' />
                    </FormButtonContainer>

                </form>
            )

        case 'pain':
            return (
                <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300pt', margin: '0 auto' }}>
                    <TextInput label='Severity' error={errors} styling={{
                        name: 'severity',
                        type: 'range',
                        min: 0,
                        max: 10,
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

                    <br />

                    <FormButtonContainer style={{ width: '100%' }}>
                        <SubmitButton style={{ width: '100%' }} type='submit' value='Submit' />
                    </FormButtonContainer>

                </form>
            )

        case 'cramping':
            return (
                <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300pt', margin: '0 auto' }}>
                    <TextInput label='Severity' error={errors} styling={{
                        name: 'severity',
                        type: 'range',
                        min: 0,
                        max: 10,
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

                    <br />

                    <FormButtonContainer style={{ width: '100%' }}>
                        <SubmitButton style={{ width: '100%' }} type='submit' value='Submit' />
                    </FormButtonContainer>

                </form>
            )

        case 'custom':
            return (
                <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300pt', margin: '0 auto' }}>
                    <TextInput label='Symptom' error={errors} styling={{
                        name: 'symptom',
                        type: 'text',
                        placeholder: `What symptom are you experiencing?`,
                        ref: register({ required: true })
                    }} />
                   
                    <TextInput label='Severity' error={errors} styling={{
                        name: 'severity',
                        type: 'range',
                        min: 0,
                        max: 10,
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

                    <br />

                    <FormButtonContainer style={{ width: '100%' }}>
                        <SubmitButton style={{ width: '100%' }} type='submit' value='Submit' />
                    </FormButtonContainer>

                </form>
            )

        default:
            return (
                <h1>Hello WOrld</h1>
            )
    }
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    REMOVE_COMPLEX_STATE: e => dispatch({ type: 'REMOVE_COMPLEX_STATE' }),
    ADD_COMPLEX_SYMPTOM: e => dispatch({type:"ADD_COMPLEX_SYMPTOM", payload:e})
})

export default connect(mapStateToProps, mapDispatchToProps)(ComplexSymptomForm)
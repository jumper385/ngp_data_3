import React from 'react'
import { useForm } from 'react-hook-form'
import { TextInput } from '../../components/formInputs/textInput'
import { SubmitButton, ButtonRowContainer } from '../../components/buttons/buttons'
import { BasePage } from '../pageBase'

export const Food = props => {

    let { handleSubmit, register, errors, reset} = useForm()
    const onSubmit = data => {
        console.log(data)
        reset()
    }

    return (
        <BasePage>

            <p className='subHeading'>Food Intake</p>
            <h1 className='heading'>Food Consumption</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <TextInput label='What did you Eat?' error={errors} styling={{
                    name: 'foodName',
                    type: 'text',
                    placeholder: `What was the name of the food`,
                    ref: register({ required: true })
                }} />

                <TextInput label='Time of Consumption' error={errors} styling={{
                    name: 'time',
                    type: 'time',
                    placeholder: 'What time did you have it at?',
                    ref: register({ required: true })
                }} />

                <TextInput label='Fodmap Type' error={errors} styling={{
                    name: 'fodmapType',
                    type: 'select',
                    ref: register({required:true}),
                    extras: {
                        options: [
                            { label: 'Choose One...', value: '' },
                            { label: 'None', value: 'none' },
                            { label: 'Fructose', value: 'fructose' },
                            { label: 'Lactose', value: 'lactose' },
                            { label: 'Polyols', value: 'polyol' },
                            { label: 'Fructan', value: 'fructan' },
                            { label: 'Galactan', value: 'galactan' },
                        ]
                    },
                }} />

                <ButtonRowContainer>
                    <SubmitButton style={{ width: '100%' }} type='submit' value='Submit' />
                </ButtonRowContainer>

            </form>
        </BasePage>
    )
}
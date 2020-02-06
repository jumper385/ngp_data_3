import React from 'react'
import { BasePage } from './pageBase'
import { useForm } from 'react-hook-form'
import { TextInput } from '../components/formInputs/textInput'
import { ButtonRowContainer, SubmitButton } from '../components/buttons/buttons'



const Context = props => {

    let { register, handleSubmit, errors, reset} = useForm()

    const onSubmit = data => {
        console.log(data)
        reset()
    }

    return (
        <BasePage>
            <p className='subHeading'>Contextual Information</p>
            <h1 className='heading'>Add Context Log</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <TextInput label='Bristol Poop Rating' error={errors} styling={{
                    name: 'poopRating',
                    type: 'select',
                    ref: register,
                    extras: {
                        options: [
                            { label: 'Pick an Option', value: '' },
                            { label: 'Type 0 - No Poop', value: '0' },
                            { label: 'Type 1 - Separate Hard Lumps', value: '1' },
                            { label: 'Type 2 - Sausage-Shaped and Lumpy', value: '2' },
                            { label: 'Type 3 - Sausage-Link and Cracked', value: '3' },
                            { label: 'Type 4 - Sausage-Shaped and Smooth', value: '4' },
                            { label: 'Type 5 - Soft Blobs with Clear Edges', value: '5' },
                            { label: 'Type 6 - Fluffy Pieces - Mushy', value: '6' },
                            { label: 'Type 7 - Watery - Entirely Liquid', value: '7' },
                        ]
                    },
                }} />

                <TextInput label='Stress Level' error={errors} styling={{
                    name: 'stress',
                    type: 'select',
                    ref: register,
                    extras: {
                        options: [
                            { label: 'Pick an Option', value: '' },
                            { label: 'Low - Little To No Stress', value: '0' },
                            { label: 'Medium - Moderate Stress', value: '5' },
                            { label: 'High - Alot of Stress', value: '10' },
                        ]
                    },
                }} />

                <TextInput label='Hours of Sleep' error={errors} styling={{
                    name: 'sleep',
                    type: 'number',
                    ref: register,
                    pattern:'[0-9]*',
                    placeholder: 'Type in the NUMBER of hours you\'ve slept... '
                }} />

                <TextInput label='Energy Level' error={errors} styling={{
                    name: 'energy',
                    type: 'select',
                    ref: register,
                    extras: {
                        options: [
                            { label: 'Pick an Option', value: '' },
                            { label: 'Low - Extremely Tired', value: '0' },
                            { label: 'Medium - Standard Energy', value: '5' },
                            { label: 'High - Too much energy', value: '10' },
                        ]
                    },
                }} />


                <ButtonRowContainer>
                    <SubmitButton type='submit' style={{ margin: '0 auto', width: '100%' }} />
                </ButtonRowContainer>

            </form>

        </BasePage>
    )
}

export default Context
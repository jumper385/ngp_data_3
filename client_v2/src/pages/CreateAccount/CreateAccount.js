import React from 'react'
import { connect } from 'react-redux'
import { useSpring } from 'react-spring'
import { useForm } from 'react-hook-form'
import { TextInput } from '../../components/formInputs/textInput'
import { FlatLink, SubmitButton, ButtonRowContainer } from '../../components/buttons/buttons'
import { BasePage } from '../pageBase'

const CreateAccount = props => {

    const { register, handleSubmit, errors, reset } = useForm()

    const onSubmit = data => {
        console.log(data)
        reset()
    }

    const slideIn = useSpring({
        transform:'scale(1)',
        left:'0%',
        bottom:'0%',
        from: {bottom:'100%',left:'100%',transform:'scale(0)'},
        config:{tension:100}
    })

    return (
        <BasePage style={slideIn}>

            <p className='subHeading'>Authentification</p>
            <h1 className='heading'>Create Account</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput label='First Name' error={errors} styling={{
                    name: 'firstName',
                    type: 'text',
                    placeholder: `Enter your first name...`,
                    ref: register({ required: true })
                }} />

                <TextInput label='Last Name' error={errors} styling={{
                    name: 'lastName',
                    type: 'text',
                    placeholder: `Enter your last name...`,
                    ref: register({ required: true })
                }} />

                <TextInput label='username' error={errors} styling={{
                    name: 'username',
                    type: 'text',
                    placeholder: `Make up a username...`,
                    ref: register({ required: true })
                }} />

                <TextInput label='Password' error={errors} styling={{
                    name: 'password',
                    type: 'password',
                    placeholder: `Try to remember this one...`,
                    ref: register({ required: true })
                }} />

                <ButtonRowContainer>
                    <FlatLink to='/login'>Login</FlatLink>
                    <SubmitButton type='submit' value='Create an Account' />
                </ButtonRowContainer>

            </form>

        </BasePage>
    )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(CreateAccount)
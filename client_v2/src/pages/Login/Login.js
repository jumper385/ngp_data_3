import React from 'react'
import { useForm } from 'react-hook-form'
import { TextInput } from '../../components/formInputs/textInput'
// import { MenuButton } from '../../components/menu'
// import { LoginContainer } from './loginContainer'
// import styled from 'styled-components'
import { connect } from 'react-redux'
import { useSpring } from 'react-spring'
import { SubmitButton, FlatLink, ButtonRowContainer } from '../../components/buttons/buttons'
import { BasePage } from '../pageBase'

const Login = props => {

    const { register, handleSubmit, errors, reset } = useForm()
    const onSubmit = async data => {
        console.log(data)
        const fakeLogin = attempt => {
            return new Promise(resolve => {
                setTimeout(resolve({
                    details: { username: attempt.username },
                    status: true,
                }), 3000)
            })
        }
        props.LOGIN(await fakeLogin(data))
        reset()
    }

    const slideIn = useSpring({
        transform:'scale(1)',
        left:'0%',
        from: {left:'100%',transform:'scale(0)'},
    })

    return (
        <BasePage style={slideIn}>

            <p className='subHeading'>Authentification</p>
            <h1 className='heading'>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <TextInput label='username' error={errors} styling={{
                    name: 'username',
                    type: 'text',
                    placeholder: 'Enter a username...',
                    ref: register({ required: true })
                }} />

                <TextInput label='password' error={errors} styling={{
                    name: 'password',
                    type: 'password',
                    placeholder: 'Enter a password...',
                    ref: register({ required: true })
                }} />

                <ButtonRowContainer>
                    <FlatLink to='/newUser'>Create Account</FlatLink> 
                    <SubmitButton type='submit' value='login'/>
                </ButtonRowContainer>

            </form>

        </BasePage>
    )
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    LOGIN: login => dispatch({ type: 'LOGIN', payload: login })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
import React from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { TextInput, SubmitButton, FormButtonContainer } from '../../components/forms/unifiedInput/formInputs'
import { PageBase } from '../pageBase'
import { socket } from '../../serverSocket'
const LoginV2 = props => {

    let { register, watch, reset, handleSubmit, errors } = useForm()

    const onSubmit = e => {
        socket.emit('client/login/submit', e)
        reset()
    }

    return (
        <PageBase style={{ background: 'white', padding: '0 32pt' }}>

            <div className='pageHeading'>
                <p className='pageCategory'>Authentication</p>
                <p className='pageTitle'>Login</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300pt', margin: '0 auto' }}>
                <TextInput label='username' error={errors} styling={{
                    name: 'username',
                    type: 'text',
                    placeholder: 'Enter a username...',
                    ref: register({ required: true })
                }} />

                <TextInput label='password' error={errors} styling={{
                    name: 'password',
                    type: 'password',
                    placeholder: 'What was your password?',
                    ref: register({ required: true })
                }} />

                <br />

                <FormButtonContainer>
                    <SubmitButton type='submit' />
                </FormButtonContainer>

            </form>

        </PageBase>
    )

}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => ({
    ADD_JWT: e => dispatch({type:"ADD_JWT", payload:e})
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginV2)
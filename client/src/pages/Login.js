import React from 'react'
import { useForm } from 'react-hook-form'
import { socket } from '../serverSocket'
import { connect } from 'react-redux'

const FormInput = props => {

    const {display, configs} = props

    return(
        <div>
            <p>{display.label}</p>
            <input type={display.type} name={display.name} ref={configs.ref}/>
            <p>{display.hint}</p>
        </div>
    )
}

const Login = props => {

    const { register, handleSubmit } = useForm()

    const onSubmit = e => {
        console.log(e)
        props.ADD_USER_DETAILS(e.username)
        socket.emit('client/login/submit', e)
    }

    return(
        <div>
            
            <h1>Welcome to the Noisy Guts Project!</h1>
            <p>Please Login</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <FormInput 
                    display={{label:'Username', type:'text', name:'username'}}
                    configs={{ref:register({required:true})}}
                />

                <FormInput 
                    display={{label:'Password', type:'password', name:'password'}}
                    configs={{ref:register({required:true})}}
                />

                <input type='submit'/>
            </form>

        </div>
    )
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    ADD_JWT: e => dispatch({type:"ADD_JWT", payload:e}),
    ADD_USER_DETAILS: e => dispatch({type:'ADD_USER_DETAILS', payload:e})
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
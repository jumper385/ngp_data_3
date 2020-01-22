import React from 'react'
import { useForm } from 'react-hook-form'
import { FormObject } from './FormObject'
import { SelectObject } from './selectObject'
import { TimestampObject } from './timestampObject'

export const SchemaFormV3 = props => {

    let { register, handleSubmit, errors, watch, reset} = useForm()

    let { schema } = props

    const formSubmit = e => {
        props.onReadyForm && props.onReadyForm(e)
        reset()
    }

    return(
        <form onSubmit={handleSubmit(formSubmit)}>
            {schema && schema.map((object, index) => {
                let { configs } = object

                console.log(object.register)

                let registerObject = register({required:false,...object.register})

                switch(configs.type){
                    
                    case 'timestamp' : 
                        return (<TimestampObject 
                                    {...Object} 
                                    register={registerObject} 
                                    errors={errors} 
                                    key={index}
                                />)

                    case 'select': 
                        return (<SelectObject 
                                    {...object} 
                                    register={registerObject} 
                                    errors={errors} 
                                    key={index} 
                                />)
                    case 'text': 
                        return (<FormObject 
                                    {...object} 
                                    register={registerObject} 
                                    errors={errors} 
                                    key={index}
                                />)
                    
                    default: 
                        return (<FormObject 
                                    {...object} 
                                    register={registerObject} 
                                    errors={errors} 
                                    key={index}
                                />)

                }
            })}
            <input type='submit'/>
            <pre>
                {JSON.stringify(watch(), null, 2)}
            </pre>
        </form>
    )
}
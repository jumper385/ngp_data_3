import React from 'react'
import { Formik, Field, Form, useField} from 'formik'
import { TextInput, Select, FormField, TagInput } from 'evergreen-ui'

const CustomField = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return(
        <FormField label={props.label}>
            <Select {...field} value={field.view} {...meta}>
                <option value='1' label='value1' />
                <option value='2' label='value2' />
                <option value='3' label='value3' />
            </Select>
        </FormField>
    )
}

const CustomTagField = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return(
        <TagInput {...field}/>
    )
}

export const TestForm = () => {
    return(
        <div>
            <Formik 
                initialValues={{field1:'', field2:'', tags:[]}}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setTimeout(() => {
                        setSubmitting(true)
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                        resetForm(true)
                    }, 400)

                }}
            >
                { ({values, handleChange, handleBlur}) => (
                    <Form>
                        <br />
                        <CustomField name='field3'/>
                        <br />
                        <Field name='tags' as={TagInput}/>
                        <button type='submit'>Submit</button>
                        <pre>
                            {JSON.stringify(values, null, 2)}
                        </pre>
                    </Form>
                 ) }
            </Formik>
        </div>
    )
}
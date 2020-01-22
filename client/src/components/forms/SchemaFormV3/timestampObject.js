import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
    background:pink;
`

export const TimestampObject = props => {
    let { configs } = props

    return(
        <InputContainer>
            <p>{props.label} {props.errors[props.name] && '(an error occured)'}</p>
            <input name={props.name} {...configs} ref={props.register}/>
            {props.hint && <p>{props.hint}</p>}
            <br />
        </InputContainer>
    )
}
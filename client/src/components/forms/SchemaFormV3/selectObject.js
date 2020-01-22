import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
    background:pink;
`

export const SelectObject = props => {
    let { configs } = props
    return(
        <InputContainer>
            <p>{props.label} {props.errors[props.name] && '(an error occured)'}</p>
            <select name={props.name} ref={props.register}>
                {configs.options.map( (object, index) => {
                    return(
                        <option value={object} key={`${props.name}_option_${index}`}>{object}</option>
                    )
                } )}
            </select>
            {props.hint && <p>{props.hint}</p>}
            <br />
        </InputContainer>
    )
}
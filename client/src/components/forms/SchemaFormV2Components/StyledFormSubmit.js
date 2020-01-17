import styled from 'styled-components'

export const StyledFormSubmit = styled.input`
    margin:0;
    -webkit-appearance: none;
    width:100%;
    height:36pt;
    margin:0;
    border:none;
    border-radius:6pt;
    background:${props => props.disabled ? '#bdc3c7' : '#2ecc71'};
    font-weight:bold;
    color:white;
`
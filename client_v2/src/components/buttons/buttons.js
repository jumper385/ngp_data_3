import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonRowContainer = styled.div`
    display:inline-flex;
    align-items:center;
    justify-content:space-between;
    margin-top:24pt;
    padding:0 9pt;
    width:100%;
    box-sizing:border-box;
`

export const SubmitButton = styled.input`
    border:none;
    font-size:9pt;
    text-transform:uppercase;
    font-weight:bold;
    background: linear-gradient(90deg, #241034 0%, #1C0638 100%);
    color:white;
    padding:9pt 36pt;
    border-radius:100vh;
    text-align:center;
    display:inline-block;
    box-shadow: 0 0 9pt rgba(0,0,0,.12)
`

export const FlatLink = styled(Link)`
    font-weight:bold;
    text-transform:uppercase;
    text-decoration:none;
    font-size: 9pt;
    color:rgba(0,0,0,.24);
`
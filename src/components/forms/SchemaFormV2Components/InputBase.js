import React from 'react'
import styled from 'styled-components'

export const StyledInputComponent = styled.div`
    -webkit-appearance: none;
    border:none;
    display:block;
    font-family:sans-serif;
    width:100%;
    margin:15pt auto;
    box-sizing:border-box;
    
    & .inputLabel {
        margin:0;
        font-size:12pt;
        font-weight:bold;
        color:rgba(0,0,0,.18);
    }

    & .inputHint {
        margin:0;
        font-size:9pt;        
        color:rgba(0,0,0,.18);
        font-weight:bold;
    }

`

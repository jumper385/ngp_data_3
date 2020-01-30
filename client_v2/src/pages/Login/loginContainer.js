import styled from 'styled-components'

import { animated } from 'react-spring'

export const LoginContainer = styled(animated.div)`

    position:absolute;
    margin:0;
    padding:0 24pt;
    box-sizing:border-box;
    background:white;
    color:black;
    min-height:100vh;
    padding-top:72pt;
    top:0;
    left:0;
    min-width:100vw;

    .subHeading {
        text-transform:uppercase;
        color:rgba(0,0,0,.12);
        text-align:center;
        margin:0;
        font-size:9pt;
        font-weight:bold;
    }

    .heading {
        text-transform:uppercase;
        font-size:18pt;
        text-align:center;
        margin:0;
        margin-top:9pt;
    }

    form {
        margin-top:72pt;
    }
`
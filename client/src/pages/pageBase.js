import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'

export const PageBase = styled(animated.div)`
    min-height:100vh;
    min-width:100vw;
    overflow-x:hidden;
    position:absolute; 
    top:0;
    left:0;
    box-sizing:border-box;
    background:white;

    .pageHeading {
        max-width:300pt;
        margin:0 auto;
        text-align:center;
        display:flex;
        flex-direction:column;
        margin-top:24pt;

        .pageCategory {
            text-transform: uppercase;
            font-size:9pt;
            font-weight:bold;
            border:1pt solid rgba(0,0,0,.24);
            margin:0 auto;
            padding: 3pt 12pt;
            border-radius:32pt;
            color:rgba(0,0,0,.24);
            margin-bottom:9pt;
            display:inline-block;
        }

        .pageTitle { 
            font-size:24pt;
            margin:0;
            text-transform:uppercase;
            font-weight:bold;
            color:rgba(0,0,0,.86);
        }

    }

`
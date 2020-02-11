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
    padding: 0 24pt;

    .pageHeading {
        max-width:300pt;
        margin:0 auto;
        text-align:center;
        display:flex;
        flex-direction:column;
        margin-top:72pt;
        align-items:center;
        margin-bottom:36pt;

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
            color:rgba(0,0,0,.86);
        }

        .pageInstructions {
            font-size:9pt
            color:rgba(0,0,0,.86);
            padding:0 12pt;
            box-sizing:border-box;
        }

    }

`
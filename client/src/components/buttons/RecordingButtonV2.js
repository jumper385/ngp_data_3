import styled from 'styled-components'

export const RecordingButton = styled.button`
    -webkit-appearance:none;
    border:none;
    height:32pt;
    display:block;
    margin:0 auto;
    border-radius:16pt;
    padding:0 24pt;
    font-weight:bold;
    background:rgb(245,245,245);
    margin-top:32pt;
    box-shadow: 
        -9px -9px 16px white,
        9px 9px 16px #a3b1c6;
    user-select: none;
    color:#a3b1c6;
    -webkit-touch-callout: none;
    font-family:sans-serif
    letter-spacing:0.15em;

    :active {
        box-shadow:     
            inset -9px -9px 16px white,
            inset 9px 9px 16px #a3b1c6;
        color:white;
    }

    i {
        font-size:28pt;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;

        &.pause {
            color:#f6e58d;
        }

        &.record {
            color:#ff4757;
        }

        &.play { 
            color:#7bed9f;
        }

    }
`
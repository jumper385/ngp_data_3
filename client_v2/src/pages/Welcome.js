import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { Keyframes } from 'react-spring/renderprops'

const Container = Keyframes.Spring(async next => {
    while (true) {
        await next({
            boxShadow: '0px 0px 9pt rgba(123, 237, 159, 0)',
            from: { boxShadow: '0px 0px 18pt rgba(123, 237, 159,1)' },
            config:{duration:2000, tension:100}
        })
        await next({
            boxShadow: '0px 0px 18pt rgba(123, 237, 159,1)',
            from: { boxShadow: '0px 0px 9pt rgba(123, 237, 159, 0)' },
            config:{duration:2000, tension:100},
            reset:true,
        })
    }
})

const PageContainer = styled.div`

    padding:0 45pt;
    margin:0;
    position:relative;
    width:100vw;
    height:100vh;
    box-sizing:border-box;

    #container1 {
        position:absolute;
        width:100vw;
        padding:0 36pt;
        box-sizing:border-box;
        top:40vh;
        left:0;

        .welcomeHeading {
            font-size:9pt;
            font-weight:bold;
            margin:0;
            margin-bottom:12pt;
            text-align:center;
        }
        .welcomeAim {
            font-size:9pt;
            margin:0;
            text-align:center;
            line-height:12pt;
        }

    }

    #container2 {

        position:absolute;
        width:100vw;
        left:0;
        bottom:45pt;
        box-sizing:border-box;
        font-size:9pt;
        text-align:center;

        .loginButton {
            font-size:9pt;
            text-decoration:none;
            color:white;
            text-transform:uppercase;
            font-weight:bold
        }

        .createAccountButton{
            font-size:9pt;
            text-decoration:none;
            color:white;
            text-transform:uppercase;
            font-weight:bold
            padding: 9pt 24pt;
            border-radius:100pt;
            background:#7BED9F;
            margin:3pt;
            display:inline-block;
            box-shadow: 0px 0px 9pt #7BED9F;
        }
    }

`

const Welcome = props => {

    let slideIn = useSpring({
        top: '40vh',
        opacity: 1,
        from: { top: '-100vh', opacity: 0 },
    })

    let fadein = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    })

    return (
        <PageContainer>

            <animated.div style={slideIn} id='container1'>
                <p className='welcomeHeading'>Welcome to the Noisy Guts Project!</p>
                <p className='welcomeAim'>Your help means alot to us and the project! With your help, we can bring a faster and more accurate diagnosis of Irratable Bowel Syndrome!</p>
            </animated.div>

            <animated.div style={fadein} id='container2'>
                <p>First, We need to identify who you are...</p>

                <Container>
                    {styles => <Link style={styles} className='createAccountButton' to='/newUser'>Create Account</Link>}
                </Container>

                <p>OR</p>
                <Link className='loginButton' to='/login'>Login</Link>
            </animated.div>

        </PageContainer>
    )

}

export default Welcome
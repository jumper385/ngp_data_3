import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faBars, faStethoscope, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import { connect } from 'react-redux'

const StyledNav = styled(animated.nav)`

  z-index:100;
  position:fixed;
  top:0;
  height:100vh;
  box-sizing:border-box;
  padding:0 24pt;
  color:white;
  background:linear-gradient(90deg, #241034 0%, #1C0638 100%);
  width:100vw;
  box-shadow:0 0 12pt rgba(0,0,0,.12);

  .profile{
    width:100%;
    display:flex;
    align-items:center;
    margin-top:111pt;
    margin-bottom:36pt;

    .profilePictures {
      height:24pt;
      width:24pt;
      border-radius:18pt;
      margin-right:12pt;
    }

    .profileText {
      position:relative;
      display:inline-block;
    }

  }

  .navLinkContainer {
    display:flex;
    flex-direction:column;
    margin-top:87pt;
    
    .NavLink {
      margin:6pt 0;
      text-decoration:none;
      color:white;
      font-weight:bold;

      span {
        margin-left:12pt;
      };

    }

  }
`

const StyledMenuButton = styled(animated.div)`
  position:fixed;
  top:0pt;
  z-index:101;
  left:18pt;
  font-size:18pt;
`

export const StatelessMenu = props => {

  const menuSlide = useSpring({
    right: props.app_state.menu_open ? '0%' : '130%',
    from: { right: props.app_state.menu_open ? '130%' : '0%'},
    config: config.gentle,
  })

  return (
    <div onClick={props.TOGGLE_MENU}>
      <StyledNav style={menuSlide}>
        <div className='profile'>
          <img alt='profile' className='profilePictures' src='https://source.unsplash.com/mEZ3PoFGs_k/250x250' />
          <div className='profileText'>
            <p className='profileName' style={{ fontWeight: 'bold', fontSize: '12pt', margin: 0 }}>{props.app_state.firstName ?? 'Profile'} {props.app_state.lastName ?? 'Name'}</p>
            <p className='profileUsername' style={{ fontWeight: 'regular', fontSize: '9pt', margin: 0 }}>@{props.app_state.username ?? 'profile_username'}</p>
          </div>
        </div>
        <div className='navLinkContainer'>
          <NavLink className='NavLink' to='/log'> <FontAwesomeIcon icon={faStethoscope} /> <span>Add Recording Log</span> </NavLink>
          <NavLink className='NavLink' to='/food'> <FontAwesomeIcon icon={faHamburger} /> <span>Add Food</span></NavLink>
          <NavLink className='NavLink' to='/context'><FontAwesomeIcon icon={faInfoCircle} /> <span>Add Contextual Info</span></NavLink>
        </div>
      </StyledNav>
    </div>
  )
}

const StatelessMenuButton = props => {

  const buttonAnimation = useSpring({
    transform: props.app_state.menu_open ? 'rotate(90deg)' : 'rotate(0deg)',
    color: props.app_state.menu_open ? 'white' : props.color ?? 'black',
    from: {
      transform: !props.app_state.menu_open ? 'rotate(90deg)' : 'rotate(0deg)',
      color: !props.app_state.menu_open ? 'white' : props.color ?? 'black',
    },
    config: config.wobbly,
  })

  return (
    <StyledMenuButton style={buttonAnimation} onClick={props.TOGGLE_MENU} className='menuButton'>
      <p><FontAwesomeIcon icon={faBars} /></p>
    </StyledMenuButton>
  )
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
  TOGGLE_MENU: () => dispatch({ type: 'TOGGLE_MENU' })
})

export const MenuButton = connect(mapStateToProps, mapDispatchToProps)(StatelessMenuButton)
export const Menu = connect(mapStateToProps, mapDispatchToProps)(StatelessMenu)
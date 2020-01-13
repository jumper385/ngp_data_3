import React, {useState, useEffect} from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Recording from './pages/Recording';
import Food from './pages/Food';
import { FixedNavBar } from './navBar/FixedNavBar';
import styled, {createGlobalStyle} from 'styled-components'
import Context from './pages/Context';
import { socket } from './serverSocket';
import { connect } from 'react-redux'
import Home from './pages/Home';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
  }
  body {
    background: #ecf0f1;
  }
`

const StyledAppDiv = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');
  font-family: 'Arial', sans-serif;
`

const App = props => {

  let [state, setState] = useState({})

  const onFoodSubmit = foods => {
    socket.emit('client/submit/food', {...foods, timestamp:new Date()})
  }

  const onContextSubmit = context => {
    socket.emit('client/submit/context', {...context, timestamp:new Date()})
  }

  return(
    <Router>
      <StyledAppDiv className='App' style={{marginBottom:'64pt'}}>
        <FixedNavBar />

        <p>{state.serverTime}</p>

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/recording'>
            <Recording/>
          </Route>

          <Route path='/addFood'>
            <Food onSubmit={onFoodSubmit}/>
          </Route>

          <Route path='/addContext'>
            <Context onSubmit={onContextSubmit}/>
          </Route>

        </Switch>
        <GlobalStyle />
      </StyledAppDiv>
    </Router>
  )

}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App)
import React from 'react';
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
  margin-top:32pt;
  margin-bottom:90pt;
`

const RecordingStatusBar = styled.div`
  background:${props => props.recording ? '#ffa502' : null}
  color:white;
  position:fixed;
  width:100vw;
  box-sizing:border-box;
  top:0;
  left:0;
  & p {
    margin:3pt 0;
    text-align:center;
  }
`

const App = props => {

  const onFoodSubmit = foods => {
    socket.emit('client/submit/food', {...foods, timestamp:foods.timestamp})
  }

  const onContextSubmit = context => {
    socket.emit('client/submit/context', {...context, timestamp: context.timestamp || new Date()})
  }

  return(
    <Router>
      <StyledAppDiv className='App'>

        <RecordingStatusBar recording={props.currentRecording.isReadyToRecord}>
          <p>{props.currentRecording.isReadyToRecord ? `You're recording...` : null}</p>
        </RecordingStatusBar>

        <FixedNavBar />

        <Switch>

          <Route exact path='/'><Home /></Route>
          <Route path='/recording'><Recording/></Route>
          <Route path='/addFood'><Food onSubmit={onFoodSubmit}/></Route>
          <Route path='/addContext'><Context onSubmit={onContextSubmit}/></Route>

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
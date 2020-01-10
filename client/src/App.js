import React, {useState, useEffect} from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Recording from './pages/Recording';
import Food from './pages/Food';
import { FixedNavBar } from './navBar/FixedNavBar';
import styled, {createGlobalStyle} from 'styled-components'
import Context from './pages/Context';
import { socket } from './serverSocket';

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
    font-family: 'Varela Round', sans-serif;
`

const App = props => {

  let [state, setState] = useState({})

  const onSymptomSubmit = symptom => {
    socket.emit('client/submit/symptom', symptom)
  }

  const onRecordingPress = e => {
    socket.emit('client/recording/state', {...e, timestamp:new Date()})
  }

  const onRatingSubmit = ratings => {
    socket.emit('client/submit/rating', {...ratings, timestamp:new Date()})
  }

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
            <div>

              <div>
                <h1>Instructions on how to use this!!!</h1>
                <h2>Navigation Buttons</h2>
                <ul>
                  <li><i className='material-icons'>home</i>: Home Page</li>
                  <li><i className='material-icons'>mic</i>: Add a Recording</li>
                  <li><i className='material-icons'>fastfood</i>: Add Food Log</li>
                  <li><i className='material-icons'>chrome_reader_mode</i>: Add Context (e.g poop, energy and sleep)</li>
                </ul>
              </div>

            </div>
          </Route>

          <Route path='/recording'>
            <Recording
              onRecordingSubmit={onSymptomSubmit}
              onRecordingPress={onRecordingPress}
              onRatingSubmit={onRatingSubmit}
            />
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

export default App
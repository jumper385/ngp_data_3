import React, {useState, useEffect} from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Recording from './pages/Recording';
import Food from './pages/Food';
import { FixedNavBar } from './navBar/FixedNavBar';
import {createGlobalStyle} from 'styled-components'
import Context from './pages/Context';
import { socket } from './serverSocket';

const GlobalStyle = createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
  }
  body { 
    font-family: 'Varela Round', sans-serif;
    background: #ecf0f1;
  }
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
      <div className='App' style={{marginBottom:'64pt'}}>
        <FixedNavBar />

        <p>{state.serverTime}</p>

        <Switch>

          <Route exact path='/'>
            <div>
              <p style={{textAlign:'center'}}>Yet to add any statistics or anything so here's a nice emoji of a cat 🐈</p>
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
      </div>
    </Router>
  )
}

export default App
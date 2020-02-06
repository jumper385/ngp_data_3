import React from 'react';
import 'normalize.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import Welcome from './pages/Welcome';
import Login from './pages/Login/Login';
import { Menu, MenuButton } from './components/menu';
import { connect } from 'react-redux';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Context from './pages/Context';
import { Food } from './pages/Food/Food';
import Recording from './pages/Recording/Recording';

// Root Styling!
const RootDiv = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap');
  font-family: 'Nunito', sans-serif;
  min-height:100vh
  min-width:100vw;
  color:white;
  background:linear-gradient(90deg, #241034 0%, #1C0638 100%);
  padding:0;
  margin:0;
`
// The Root page of the app...

function App() {
  return (
    <Router>
      <RootDiv className="App">
        <Menu />
        <MenuButton color='rgba(0,0,0,.18)'/>

        <Switch>
          <Route exact path='/'><Welcome /></Route>
          <Route path='/welcome'><Welcome /></Route>
          <Route path='/log'><Recording /></Route>
          <Route path='/login'><Login /></Route>
          <Route path='/food'><Food /></Route>
          <Route path='/context'><Context /></Route>
          <Route path='/newUser'><CreateAccount /></Route>
        </Switch>
      
      </RootDiv>
    </Router>
  );
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(App);

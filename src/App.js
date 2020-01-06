import React from 'react';
import { Switch, BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import Recording from './pages/Recording';
import Food from './pages/Food';
import { SchemaFormV2 } from './components/forms/SchemaFormV2';

const App = props => {
  return(
    <Router>
      <div className='All'>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/addFood'>Food</NavLink>
          <NavLink to='/addContext'>Context</NavLink>
          <NavLink to='/testPage'>Test</NavLink>
        </nav>

        <Switch>

          <Route exact path='/'>
            <Recording onSymptomSubmit={symptom => console.log(symptom)} />
          </Route>

          <Route path='/addFood'>
            <Food onChange={e => console.log(e)} onSubmit={e => console.log(e)}/>
          </Route>

          <Route path='/addContext'>
            <p>Context</p>
          </Route>

          <Route path='/testPage'>
            <SchemaFormV2 
              onReadyForm={e => console.log('submitted', e)}
              schema={[
                {type:'text', label:'Symptom', name:'symptom'},
                {type:'text', label:'Location', name:'location', hint:'lower lhs? upper lhs?'},
                {type:'range', label:'Severity', name:'severity', min:0, max:10, hint:'How bad does it hurt?'},
                {type:'text', label:'Notes', name:'test2'},
              ]}
            />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App
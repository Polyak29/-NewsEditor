import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Create from './Create';

class App extends Component  {
  render() {
    return (
        <Router>
          <Route exact  path='/' component={Home}/>
          <Route path='/create' component={Create}/>
        </Router>
    );
  }
}


export default App;

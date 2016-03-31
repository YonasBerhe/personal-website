import React from 'react';
import ReactDOM from 'react-dom';

import Form from './form';
import {hashHistory, Router, Route} from 'react-router';


// Render the main component into the dom
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Form}/>
  </Router>
), document.getElementById('app'))

import React from 'react';
import ReactDOM from 'react-dom';
//
import Form from './form';
import Rei from './casestudies/rei';
import Wellsfargo from './casestudies/wellsfargo';
import App from './Home';
import Caselist from './caselist';
import Devproj from './devprojects.js';
import About from './about';
import {hashHistory, Router, Route} from 'react-router';

//DO this: App not routing to home from any page check react-router
// Render the main component into the dom
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path   ="/" component={App}/>
      <Route path ="/contact" component={Form}/>
      <Route path ="/cases" component={Caselist} />
      <Route path = "/rei" component={Rei} />
      <Route path = "/wellsfargo" component={Wellsfargo} />
      <Route path = "/caselist" component={Caselist} />
      <Route path = "/about" component={About} />
      <Route path = "/development" component={Devproj} />
  </Router>
), document.getElementById('app'))

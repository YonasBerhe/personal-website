import React from 'react';
import ReactDOM from 'react-dom';

import Favicon from 'react-favicon';
import Form from './form';
import Rei from './casestudies/rei';
import Wellsfargo from './casestudies/wellsfargo';
import App from './Home';
import RouteForm from './reroute.js';
import Caselist from './caselist';
import Devproj from './devprojects.js';
import About from './about';
import {hashHistory, Router, Route} from 'react-router';
import Books from './books'

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
      <Route path = "/route" component={RouteForm} />
      <Route path = "/books" component={Books} />

  </Router>
), document.getElementById('app'))

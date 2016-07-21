require('normalize.css');
require('styles/App.css');

import React from 'react';
import Navigation from './global/nav';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Button, Input} from 'react-bootstrap';

import {Hero, Footer, Section} from 'neal-react';
import {Link} from 'react-router';



class Thanks extends React.Component {
  render() {
    return (
      <div>
  <Navigation /> 
  <div className="thank-you">
      <h1> Thank you, for reaching out  <br /> to me.</h1>
      
  
  </div>

          


      </div>
    );
  }
}

//
// AppComponent.defaultProps = {
// };

export default Thanks;

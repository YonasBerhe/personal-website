require('normalize.css');
require('styles/App.css');

import React from 'react';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';

class Navigation extends React.Component {
  render() {
    return (
      <div>
      <Navbar inverse fixedTop>
   <Navbar.Header>
     <Navbar.Brand>
       <a href="#"></a>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>
     <Nav pullRight>
      <li><Link to="/"  activeStyle={{color:"#ffc04c"}}>Home</Link></li>
<li><Link to="/about"  activeStyle={{color:"#ffc06c"}}>About</Link></li>

<NavDropdown title="Portfolio" id="basic-nav-dropdown">
      <li><Link to="/caselist"  activeStyle={{color:"#ffc04c"}}>Case studies</Link></li>
      <li><Link to="/development"  activeStyle={{color:"#ffc04c"}}>Development</Link></li>
</NavDropdown>
<li><Link to="/contact"  activeStyle={{color:"#ffc06c"}}>Contact</Link></li>
<li><Link to="/googlelink"  activeStyle={{color:"#ffc06c"}}>Resume</Link></li>




</Nav>
</Navbar.Collapse>
</Navbar>
</div>
);
}
}
//
// AppComponent.defaultProps = {
// };

export default Navigation;

require('normalize.css');
require('styles/App.css');

import React from 'react';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Button} from 'react-bootstrap';

import {Hero, Footer, Section} from 'neal-react';


const brandName = "SamplePage";
const brand = <span>{brandName}</span>;


const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    1337 Market Street, Suite 1337<br/>
    San Francisco, CA 94103<br/>
    +1 (123) 456-7890
  </address>
);

class form extends React.Component {
  render() {
    return (
      <div>
      <Navbar inverse fixedTop>
   <Navbar.Header>
     <Navbar.Brand>
       <a href="#">React-Bootstrap</a>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>
     <Nav pullRight>
       <NavItem href="#">Home</NavItem>
       <NavItem  href="#">About</NavItem>
       <NavDropdown eventKey={3} title="Portfolio" id="basic-nav-dropdown">
         <MenuItem eventKey={3.1}>Action</MenuItem>
         <MenuItem eventKey={3.2}>Another action</MenuItem>
         <MenuItem eventKey={3.3}>Something else here</MenuItem>
         <MenuItem divider />
         <MenuItem eventKey={3.3}>Separated link</MenuItem>
       </NavDropdown>
       <NavItem href="#">Contact</NavItem>
     </Nav>
   </Navbar.Collapse>
 </Navbar>




      <Hero className="text-xs-center header-home">
           <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>

              <img src="./assets/img/photon.jpg" alt="boohoo" class="img-responsive" data-reactid=".0.1.0.1.0.0.1"></img>

            </Col>
            <Col xs={12} md={8}>
            <h1>UX Designer / Coder</h1>
            </Col>
          </Row>
        </Grid>
      </Hero>


      <Section className="subhero">



<Mailer />

      </Section>


      <Footer brandName={brandName}
          facebookUrl="http://www.facebook.com"
          twitterUrl="http://www.twitter.com/dennybritz"
          githubUrl="https://github.com/dennybritz/neal-react"
          address={businessAddress}>
        </Footer>
      </div>
    );
  }
}


var Mailer = React.createClass ({
  _inputfirstname: function (event) {
    console.log("this ran");
    this.setState ({
      firstname: event.target.value

    })
        console.log(this.state.firstname);
  },
  getIntialState: function() {
    return
    {
          firstname: ""
    };
  },
  render: function () {
  return (
    <form className="input-color">
   <Firstname firstname = {this._inputfirstname}/>
  <Lastname />

    <Button bsStyle="info">Submit</Button>
    </form>
  );
  }
}
)

var Firstname = React.createClass( {
callparent: function () {
  console.log("anything");
  this.props.firstname ()

},
  render() {
    console.log(this.props.firstname);
  return (
    <input onChange={this.callparent} type="text" />
  );
  }
}
)

class Lastname extends React.Component {
  render() {
  return (
    <input type="text" value="" placeholder="lastname"/>
  );
  }
}
//
// AppComponent.defaultProps = {
// };

export default form;

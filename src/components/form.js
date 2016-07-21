require('normalize.css');
require('styles/App.css');

import React from 'react';
import Navigation from './global/nav';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Button, Input} from 'react-bootstrap';

import {Hero, Footer, Section} from 'neal-react';
import {Link} from 'react-router';



const linkHome ="<span><a>www.yonasberhe.tech</a></span>";


const Mailer = React.createClass ({
  _inputfieldname: function (event) {
    console.log("name");
     this.setState ({
      name :event.target.value
    })
  },
    

_inputfieldemail: function (event) {
console.log("email")
  this.setState ({
  email: event.target.value

})
}, 


_inputfieldmessage: function (event) {
console.log("message")
  this.setState ({
  message: event.target.value

})
}, 

// setting state of input field
  getIntialState: function() {
    return
    ({
// setting state of these values
          name: "",
          email: "",
	  message: ""
        
    });

  },


_capturevalue: function (event) {
  event.preventDefault();
    fetch('http://localhost:4812/data',  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
          body: JSON.stringify({
              Name: this.state.name, 
	      Email: this.state.email, 
	      Message: this.state.message
          })
    }).then(
	window.location.href = '/#/route')

alert("I will get back to you shortly" + linkHome );
},



  render: function () {
  return (
    <form onSubmit={this._capturevalue} id="mailer-form">

<Name name= {this._inputfieldname} />
<Email email= {this._inputfieldemail} />
<Textarea message= {this._inputfieldmessage} />  
    <Button bsStyle="info" className="submit-form" type="submit">Submit</Button>
    </form>
  );
  }
}
)
const Name = React.createClass( {

  render() {

  return (
  <Input onChange={this.props.name}  type="text" placeholder=" Your Name" />
  );
}
}

)


const Email = React.createClass( {

  render() {

  return (
    <Input onChange={this.props.email} className="email-input"  type="text" placeholder="Your Email" name="email" />
  );
}
  }

)

const Textarea = React.createClass( {

  render() {

  return (

     <Input onChange={this.props.message}  type="textarea"  placeholder="Your Message" />
  );
}
  }

)

// UPNEXT: add form validation to email input field
class Mailerform extends React.Component {
  render() {
    return (
      <div>
  <Navigation /> 


      <Section className="subhero contact-form">
<h1>Contact Me!</h1>
<Mailer />

      </Section>


      </div>
    );
  }
}

//
// AppComponent.defaultProps = {
// };

export default Mailerform;

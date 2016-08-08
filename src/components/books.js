require('normalize.css');
require('styles/App.css');

import React from 'react';
import Navigation from './global/nav';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Button, Input} from 'react-bootstrap';

import {Hero, Footer, Section} from 'neal-react';
import {Link} from 'react-router';

 $.ajax({
     type: 'POST',
     dataType: 'json',
     url: 'http://localhost:4812/books'
   })
   .then(function(response) {
     console.log(response);
   })



// UPNEXT: add form validation to email input field
class Books extends React.Component {
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


export default Books;

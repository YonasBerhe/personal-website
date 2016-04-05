require('normalize.css');
require('styles/App.css');

import React from 'react';
import Navigation from './global/nav';

import {Grid, Row, Col, Button} from 'react-bootstrap';

import {Hero, Footer, Sectionm, Team, TeamMember, Section} from 'neal-react';
import {Link} from 'react-router';

const brandName = "";


class AppComponent extends React.Component {
  render() {
    return (
      <div>

      <Navigation />;
      <Hero className="text-xs-center header-home">
           <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4}>

              <img src="../images/profileimage.jpg" alt="boohoo" className="img-responsive"></img>
          </Col>
            <Col xs={12} md={8}>
            <h3>
User research is one of my favorite parts about designing a user experience. I have a keen eye for generating insights from user research data. I like understanding the psychology of the user, and the mesh of psychology and technology is central to the practice of user experience design. I also understand how to write software and speak to developers about user experience design requirements.
		</h3>
            </Col>
          </Row>
        </Grid>
      </Hero>
     </div>
    );
  }
}
//
// AppComponent.defaultProps = {
// };

export default AppComponent;
